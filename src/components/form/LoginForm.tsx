import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";

import { FaEye } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { Modal } from "@mui/material";
import ErrorPopup from "~/popups/Error";
import LoginFailedPopup from "~/popups/LoginFailedPopup";

const LoginForm: React.FunctionComponent = () => {
  const router = useRouter();

  const navigate = async () => {
    await router.push("/admin-panel");
  };
  const [userInfo, setUserInfo] = useState({ id: "", password: "" });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      id: userInfo.id,
      password: userInfo.password,
      redirect: false,
    });
    if (res?.ok) {
      await navigate();
      console.log("logged in");
    }
    if (res?.error) {
      // Authentication error occurred
      handleOpen();
    }
    return undefined;
  };
  return (
    <div className="flex h-screen w-screen flex-grow items-center justify-center !font-lato">
      <form className="flex h-fit w-[400px] max-w-[90%] flex-col items-center justify-center gap-y-8 self-center rounded  border-black shadow-md">
        <h2 className=" text-2xl font-semibold text-[#5F0404]">Login</h2>
        <span className="">
          Hey, Enter your details to get sign in to your account
        </span>
        <input
          className="m-1 block w-5/6 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#23b196] focus:outline-none focus:ring-[#23b196] sm:text-sm"
          placeholder="User-Email"
          value={userInfo.id}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, id: target.value })
          }
        />
        <div className="m-1 flex w-5/6 justify-between rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-[#23b196] sm:text-sm">
          <input
            className="w-[90%] focus:outline-none"
            placeholder="Password"
            value={userInfo.password}
            onChange={({ target }) =>
              setUserInfo({ ...userInfo, password: target.value })
            }
          />
          <button type="button" className="">
            <FaEye />
          </button>
        </div>
        <button
          type="submit"
          className="w-24 rounded-full bg-[#5F0404] px-4 py-2 font-semibold text-white  focus:outline-none"
          value="login"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <span>
          Don’t have an account?{" "}
          <span className="cursor-pointer text-[#5F0404] underline">
            Connect
          </span>{" "}
          With Admin
        </span>
      </form>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex h-screen w-screen items-center justify-center"
        open={open}
        onClose={handleClose}
      >
        <LoginFailedPopup onClick={handleClose} />
      </Modal>
    </div>
  );
};

export default LoginForm;
