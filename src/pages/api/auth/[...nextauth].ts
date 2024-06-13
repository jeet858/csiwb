import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const loginUserSchema = z.object({
  id: z.string(),
  password: z.string(),
});
const prisma = new PrismaClient();
const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        id: { type: "id", placeholder: "user_id" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { id, password } = loginUserSchema.parse(credentials);

        const user = await prisma.userData.findUnique({ where: { id: id } });

        if (!user) return null;
        const isCredentialsCorrect = password === user.password;

        if (!isCredentialsCorrect) return null;
        await prisma.$disconnect();

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id as string;

      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.username = user.id;
        console.log(account.session_state);
      }
      return token;
    },
  },

  pages: {
    signIn: "/admin-panel",
    error: "/",
  },
};

export default NextAuth(authOptions);
