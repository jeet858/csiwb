import React, { useState } from "react";

const UploadPoster: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  //   const [file, setFile] = useState<File | null | undefined>(null);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const [fileName, setFileName] = useState<string>("");
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files;
  if (fileList && fileList.length > 0) {
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
    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      setFiles(droppedFile);
      setFileName(droppedFile.name);
    //   console.log(droppedFile.name)
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Simple File Upload Form</h2>
      <p className="mb-4">
        Please fill in the information and upload your file.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-row space-x-[3%]">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block">Upload your file</label>
          
            <div
              className={`flex h-24 w-full items-center justify-center rounded-md border-2 border-dashed border-[#656565] ${dragging ? "bg-[#d9d9d985]" : "bg-[#d9d9d9]"} p-[1%]`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {
                !files&&
                <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
                required
              />
              }
              {files?<p>{fileName}</p>:""}
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPoster;
