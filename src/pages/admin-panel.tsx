import Image, { StaticImageData } from "next/image";
import React, { MouseEventHandler, useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import LoginForm from "~/components/form/LoginForm";

const AdminPanel: React.FunctionComponent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { data, isError, isLoading } = api.post.getPoster.useQuery();
  const [item, setItem] = useState<{
    name: string;
    email: string;
    phone: string;
    image_url: string;
  }>();

  const ses = useSession();
  if (ses.status === "loading") {
    return <div></div>;
  } else if (ses.status === "authenticated") {
    return (
      <div className="flex h-lvh w-screen flex-row overflow-y-hidden">
        <div className="h-full w-[20%] overflow-y-auto border-r-2 border-black ">
          {data?.map((item, index) => {
            return (
              <button
                key={index}
                className="h-[5%] w-full border-b-[1px]  border-black"
                onClick={() => {
                  setImageUrl(item.image_url);
                  setItem(item);
                  console.log(item.image_url);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="flex h-lvh w-[80%] items-center justify-center ">
          <div className="flex h-[90%] w-[90%] items-center justify-center rounded-2xl border-2 border-black">
            {imageUrl !== "" && item !== undefined && (
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={imageUrl}
                  alt=""
                  className="h-fit w-fit self-center rounded-2xl"
                  width={400}
                  height={400}
                />
                <div className="mt-4 flex flex-col">
                  <p>Submitted By: {item.name}</p>
                  <p>Phone No. {item.phone}</p>
                  <p>Email: {item.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (ses.status === "unauthenticated") {
    return <LoginForm />;
  }
};

export default AdminPanel;
