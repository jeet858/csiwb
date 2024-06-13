import React, { useState } from "react";
import { api } from "~/utils/api";
import supabase, { createClient } from "@supabase/supabase-js";
import { FiUpload } from "react-icons/fi";
import { env } from "~/env";
import { IoCloseOutline } from "react-icons/io5";
import { Modal } from "@mui/material";
import ProcessingPopup from "~/popups/ProcessingPopup";
interface UploadPosterProps {
  onCloseClick: () => void;
  onUploadSuccess: (value: boolean) => void;
  onUploadFailed: (value: boolean) => void;
}
const UploadPoster: React.FC<UploadPosterProps> = ({
  onCloseClick,
  onUploadSuccess,
  onUploadFailed,
}) => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [files, setFiles] = useState<File | null>();
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [uploadData, setUploadData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    image_url: "",
  });
  const date = Date();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0 && fileList[0]) {
      const selectedFile = fileList[0];
      setFiles(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!agreed) {
      alert("You must agree to the terms and conditions");
      return;
    }
    // Handle form submission logic here
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0 && droppedFiles[0]) {
      const droppedFile = droppedFiles[0];
      setFiles(droppedFile);
      setFileName(droppedFile.name);
      //   console.log(droppedFile.name)
    }
  };
  const poster = api.post.uploadPoster.useMutation({
    onError(error, variables, context) {
      handleClose();
      onUploadFailed(true);
    },
    onSuccess(data, variables, context) {
      handleClose();
      onCloseClick();
      onUploadSuccess(true);
    },
  });
  const uploadPoster = () => {
    poster.mutate({
      email: uploadData.email,
      image_url: "demo",
      name: `${uploadData.first_name} ${uploadData.last_name}`,
      phone: uploadData.phone,
    });
  };
  const uploadFile = async () => {
    handleOpen();
    const supabase_url = env.NEXT_PUBLIC_SUPABASE_URL;
    const supabase_anon_key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabase_url, supabase_anon_key);
    const avatarFile = files;
    if (avatarFile) {
      const { data, error } = await supabase.storage
        .from("posters")
        .upload(`${avatarFile.name}${date}`, avatarFile, {
          cacheControl: "3600",
          upsert: false,
        });
      if (!error) {
        const filePathWithEncodedSpaces = data.path.replace(/ /g, "%20");
        const uploadedImageUrl = `${supabase_url}/storage/v1/object/public/posters/${filePathWithEncodedSpaces}`;
        poster.mutate({
          email: uploadData.email,
          image_url: uploadedImageUrl,
          name: `${uploadData.first_name} ${uploadData.last_name}`,
          phone: uploadData.phone,
        });
      }
    } else {
      onUploadFailed(true);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex h-screen w-screen items-center justify-center"
        open={open}
        onClose={handleClose}
      >
        <ProcessingPopup />
      </Modal>
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold">Poster Upload Form</h2>
        <IoCloseOutline
          className="mb-4 h-6 w-6 hover:text-red-700"
          onClick={onCloseClick}
        />
      </div>
      <p className="mb-4">
        Please fill in the information and upload your poster.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-row space-x-[3%]">
          <input
            type="text"
            placeholder="First Name"
            value={uploadData.first_name}
            onChange={(e) =>
              setUploadData({ ...uploadData, first_name: e.target.value })
            }
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={uploadData.last_name}
            onChange={(e) =>
              setUploadData({ ...uploadData, last_name: e.target.value })
            }
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address *"
            value={uploadData.email}
            onChange={(e) =>
              setUploadData({ ...uploadData, email: e.target.value })
            }
            required
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Phone Number"
            value={uploadData.phone}
            onChange={(e) =>
              setUploadData({ ...uploadData, phone: e.target.value })
            }
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block"> Upload your file</label>

          <div
            className={`flex h-24 w-full items-center justify-center rounded-md border-2 border-dashed border-[#656565] ${dragging ? "bg-[#d9d9d985]" : "bg-[#d9d9d9]"} flex-col p-[1%]`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {!files && (
              <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,"
                required
                className="pl-20"
              />
            )}
            {files ? <p>{fileName}</p> : ""}
            <p>Only .jpg, .jpeg and .png file types are accepted</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>
        </div>
        {uploadData.email !== "" &&
        uploadData.first_name !== "" &&
        uploadData.last_name !== "" &&
        uploadData.phone !== "" &&
        files &&
        agreed ? (
          <button
            type="submit"
            className="mt-2 w-full rounded bg-[#5F0404] p-2 text-white hover:bg-[#280101]"
            onClick={uploadFile}
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="mt-2 w-full rounded bg-[#d9d9d9] p-2 text-white "
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default UploadPoster;
