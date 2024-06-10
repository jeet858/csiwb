import Image, { StaticImageData } from "next/image";
import x from "/images/download.jpeg";
import y from "/images/download (1).jpeg";
import z from "/images/download (2).jpeg";
import React, { useState } from "react";
import { api } from "~/utils/api";

const AdminPanel: React.FunctionComponent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { data, isError, isLoading } = api.post.getPoster.useQuery();

  return (
    <div className="flex h-lvh w-screen flex-row overflow-y-hidden">
      <div className="h-full w-[20%] ">
        {data?.map((item, index) => {
          return (
            <button
              key={index}
              className="h-[5%] w-full border-2 border-black"
              onClick={() => {
                setImageUrl(item.image_url);
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
          {imageUrl !== "" && (
            <Image
              src={imageUrl}
              alt=""
              className="h-fit w-fit self-center rounded-2xl"
              width={400}
              height={400}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
