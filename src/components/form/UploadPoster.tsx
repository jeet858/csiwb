import React, { useState } from "react";
import { api } from "~/utils/api";
import supabase, { createClient } from "@supabase/supabase-js";
import { FiUpload } from "react-icons/fi";
import { env } from "~/env";
const UploadPoster: React.FC = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [files, setFiles] = useState<File | null>();
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState(false);
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
      alert("error occured");
    },
    onSuccess(data, variables, context) {
      alert("Success");
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
    const supabase_url = env.NEXT_PUBLIC_SUPABASE_URL;
    const supabase_anon_key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabase_url, supabase_anon_key);
    const avatarFile = files;
    if (avatarFile) {
      const { data, error } = await supabase.storage
        .from("posters")
        .upload(`${avatarFile.name}${date}`, avatarFile, {
          cacheControl: "3600",
          upsert: true,
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
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Poster Upload Form</h2>
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
            type="text"
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
            className={`flex h-24 w-full items-center justify-center rounded-md border-2 border-dashed border-[#656565] ${dragging ? "bg-[#d9d9d985]" : "bg-[#d9d9d9]"} p-[1%]`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {!files && (
              <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
                required
              />
            )}
            {files ? <p>{fileName}</p> : ""}
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
        <button
          type="submit"
          className="mt-2 w-full rounded bg-purple-600 p-2 text-white hover:bg-purple-700"
          onClick={uploadFile}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPoster;
