import Image, { StaticImageData } from "next/image";
import React, { MouseEventHandler, useState } from "react";
import { api } from "~/utils/api";
import { useSession, signOut } from "next-auth/react";
import LoginForm from "~/components/form/LoginForm";
import logo from "../../images/logo2.png";
import loading from "../../images/loading.png";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
const AdminPanel: React.FunctionComponent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { data, isError, isLoading } = api.post.getPoster.useQuery();
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    email: string;
    phone: string;
    image_url: string;
    upload_date: string;
    upload_time: string;
  }>();
  const [imageLoading, setImageLoading] = useState(false);
  const ses = useSession();
  if (ses.status === "loading") {
    return <div></div>;
  } else if (ses.status === "authenticated") {
    return (
      <div className="admin-bg flex h-screen w-screen pt-4">
        <div className="flex h-full w-1/5 flex-col sm:w-fit md:w-fit">
          <Image src={logo} alt="" className=" ml-6 h-16 w-16" />
          <div className="mb-4 mt-8 flex h-full w-full flex-col gap-y-4 self-center overflow-y-auto">
            <div className=" flex h-12 min-h-12 w-4/5 items-center  rounded-r-full border-2  bg-white pl-[5%] text-lg font-semibold shadow-lg sm:h-fit sm:max-h-fit sm:w-32 sm:text-sm md:h-fit md:max-h-fit md:w-32 md:text-sm">
              Participants
            </div>
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex h-12 min-h-12 w-4/5 cursor-pointer items-center rounded-r-full bg-white pl-[5%] font-lato text-lg font-semibold shadow-lg  sm:w-32 sm:min-w-32 sm:pr-2 sm:text-sm md:min-h-fit md:w-32 md:pr-2  md:text-sm ${item.image_url === selectedItem?.image_url ? "text-[#8A0406]" : "text-[#DC4952]"}`}
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex h-full w-4/5 flex-col">
          <div className="flex h-[5%] w-[95%] items-center justify-between self-center">
            <p className="font-lato  text-4xl text-white">Admin Panel</p>

            <div className="flex items-center justify-center gap-x-8 text-white">
              <div className="rounded-full ">
                <FaPowerOff
                  className="h-8 w-8"
                  onClick={async (e) => {
                    e.preventDefault();
                    await signOut();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid h-[95%] w-full">
            <div className="grid h-[95%] w-[94%] self-center justify-self-center overflow-y-auto rounded-lg bg-white shadow-lg">
              <div className="2xl:w-[95%] flex h-full w-[95%] justify-center  self-end justify-self-end sm:w-[93%] md:w-[92%] xl:w-[93%]">
                {selectedItem !== undefined &&
                  (imageLoading === false ? (
                    <div className="flex w-full flex-col">
                      <p className="my-[4%] items-center justify-center self-center font-lato text-3xl uppercase text-[#4B0505]">
                        {selectedItem.name}
                      </p>
                      <div className="custom  flex w-full items-center justify-between sm:flex-col sm:justify-center md:flex-col md:justify-center ">
                        <Image
                          src={selectedItem.image_url}
                          alt=""
                          className="h-fit w-1/2 self-center rounded-2xl sm:w-full md:w-full"
                          width={400}
                          height={400}
                          onLoadingComplete={() => {
                            console.log("complert");
                            setImageLoading(false);
                          }}
                          onLoadStart={() => {
                            alert("at");
                            setImageLoading(true);
                          }}
                        />
                        <div className="mt-4 flex h-full w-1/2  flex-col items-center justify-evenly self-start sm:w-full md:w-full">
                          <div className="flex h-fit w-fit flex-col gap-y-4 ">
                            <div className="flex ">
                              <p className="text-xl font-semibold text-[#8A0406] sm:text-sm md:text-sm">
                                Upload Date :
                              </p>
                              <p className="ml-2 text-xl font-semibold text-[#2E2E2E] sm:text-sm md:text-sm">
                                {selectedItem.upload_date}
                              </p>
                            </div>
                            <div className="flex">
                              <p className="text-xl font-semibold text-[#8A0406] sm:text-sm md:text-sm">
                                Upload Time :
                              </p>
                              <p className="ml-2 text-xl font-semibold text-[#2E2E2E] sm:text-sm md:text-sm">
                                {selectedItem.upload_time}
                              </p>
                            </div>
                            <div className="flex">
                              <p className="text-xl font-semibold text-[#8A0406] sm:text-sm md:text-sm">
                                Email:
                              </p>
                              <p className="ml-2 text-xl font-semibold text-[#2E2E2E] sm:text-sm md:text-sm">
                                {selectedItem.email}
                              </p>
                            </div>
                            <div className="flex">
                              <p className="text-xl font-semibold text-[#8A0406] sm:text-sm md:text-sm">
                                Contact:
                              </p>
                              <p className="ml-2 text-xl font-semibold text-[#2E2E2E] sm:text-sm md:text-sm">
                                {selectedItem.phone}
                              </p>
                            </div>
                          </div>
                          <div className="flex w-full justify-evenly sm:mt-4 md:mt-4">
                            <button
                              className="flex h-10 w-24 items-center justify-center rounded bg-[#560303] text-white sm:text-sm md:h-8 md:w-16 md:text-sm"
                              onClick={() => {
                                if (data) {
                                  const index = data.findIndex(
                                    (item) =>
                                      item.name === selectedItem.name &&
                                      item.email === selectedItem.email &&
                                      item.phone === selectedItem.phone &&
                                      item.image_url === selectedItem.image_url,
                                  );
                                  setSelectedItem(data[index - 1]);
                                }
                              }}
                            >
                              <RiArrowLeftSLine />
                              Prev
                            </button>
                            <button
                              className="flex h-10 w-24 items-center justify-center rounded bg-[#560303] text-white sm:text-sm md:h-8 md:w-16 md:text-sm"
                              onClick={() => {
                                if (data) {
                                  const index = data.findIndex(
                                    (item) =>
                                      item.name === selectedItem.name &&
                                      item.email === selectedItem.email &&
                                      item.phone === selectedItem.phone &&
                                      item.image_url === selectedItem.image_url,
                                  );
                                  setSelectedItem(data[index + 1]);
                                }
                              }}
                            >
                              Next
                              <RiArrowRightSLine />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex self-center">
                      <Image
                        src={loading}
                        alt=""
                        className="h-24 w-24 animate-spin"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (ses.status === "unauthenticated") {
    return <LoginForm />;
  }
};

export default AdminPanel;
