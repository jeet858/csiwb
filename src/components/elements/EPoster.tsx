import React from "react";
import b from "../../../images/Beach-House.jpeg";
import eposterHeading from "../../../images/eposter-heading.png";
import eposter from "../../../images/eposter.png";
import Image from "next/image";
import Carousel from "./Carousel";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import UploadPoster from "../form/UploadPoster";
import { FiUpload } from "react-icons/fi";
import SuccessPopup from "~/popups/Success";
import ErrorPopup from "~/popups/Error";

const SubmitPoster: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const items = [
    { img: eposter },
    { img: eposter },
    { img: eposter },
    { img: eposter },
  ];
  const [uploadSuccess, setUploadSuccess] = React.useState(false);

  const [uploadFailed, setUploadFailed] = React.useState(false);

  const handleUploadSuccess = () => {
    setUploadSuccess(true);
  };
  const handleUploadFailed = () => {
    setUploadFailed(true);
  };
  const handleUploadSuccessClose = () => {
    setUploadSuccess(false);
  };
  const handleUploadFailedClose = () => {
    setUploadFailed(false);
  };
  return (
    <div className="flex w-full flex-col bg-white py-6">
      <Image
        src={eposterHeading}
        alt="Submit E-Poster"
        className="self-center"
      />

      <div className="eposter-bg my-12 flex  h-fit w-full items-center justify-center pt-8 ">
        <div className="flex h-fit w-4/5">
          <Carousel
            items={items}
            arrows={false}
            autoPlay={false}
            indicator={true}
            indicatorColor="#FFFFFF"
          />
        </div>
      </div>
      <Button
        onClick={handleOpen}
        className="w-60 self-center rounded-md bg-[#5F0404] py-2 font-semibold text-white hover:bg-[#280101]"
      >
        <FiUpload className="mr-2 h-6 w-6 text-white" />
        Upload Poster
      </Button>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex h-screen w-screen items-center justify-center"
        open={open}
        onClose={handleClose}
      >
        <UploadPoster
          onCloseClick={handleClose}
          onUploadSuccess={handleUploadSuccess}
          onUploadFailed={handleUploadFailed}
        />
      </Modal>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex h-screen w-screen items-center justify-center"
        open={uploadSuccess}
        onClose={handleClose}
      >
        <SuccessPopup onClick={handleUploadSuccessClose} />
      </Modal>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex h-screen w-screen items-center justify-center"
        open={uploadFailed}
        onClose={handleClose}
      >
        <ErrorPopup onClick={handleClose} />
      </Modal>
    </div>
  );
};

export default SubmitPoster;
