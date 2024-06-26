import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
const uploadPosterSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  image_url: z.string(),
});
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.post.create({
  //       data: {
  //         name: input.name,
  //         createdBy: { connect: { id: ctx.session.user.id } },
  //       },
  //     });
  //   }),

  // getLatest: protectedProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //     where: { createdBy: { id: ctx.session.user.id } },
  //   });
  // }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  uploadPoster: publicProcedure
    .input(uploadPosterSchema)
    .mutation(async ({ ctx, input }) => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      const istDateString = istDate
        .toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        })
        .split(", ");

      return await ctx.db.poster.create({
        data: {
          upload_date: istDateString[0] as string,
          upload_time: istDateString[1] as string,
          email: input.email,
          image_url: input.image_url,
          name: input.name,
          phone: input.phone,
        },
      });
    }),
  getPoster: publicProcedure.query(async ({ ctx, input }) => {
    return await ctx.db.poster.findMany();
  }),
});
