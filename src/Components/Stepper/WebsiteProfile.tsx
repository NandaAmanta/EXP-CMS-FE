import Input from "../Input/Input"
import React, {useState} from "react"
import { useStepperContext } from "./StepperContext";


function WebsiteProfile() {
   const [file, setFile] = useState<File | null>(null);
   const [previewURL, setPreviewURL] = useState<string | null>(null);
   const { formData, setFormData } = useStepperContext();

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const selectedFile = event.target.files && event.target.files[0];

     if (selectedFile) {
       setFile(selectedFile);
       setPreviewURL(URL.createObjectURL(selectedFile));
     }
   };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      websiteProfileData: {
        ...prevFormData.websiteProfileData,
        name: event.target.value,
      },
    }));
  };

  const handleSubtitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      websiteProfileData: {
        ...prevFormData.websiteProfileData,
        subtitle: event.target.value,
      },
    }));
  };

    const websiteName = formData.websiteProfileData?.name || "";
    const websiteSubtitle = formData.websiteProfileData?.subtitle || "";



  return (
    <>
      <div className="top-profile mb-6">
        <h1 className="text-3xl font-bold">Information</h1>
      </div>
      <form action="" className="form-control">
        <div className="form-group">
          <Input
            label="Website Title"
            inputProps={{
              type: "text",
              id: "text",
              name: "text",
              className: "input input-bordered w-full",
              onChange: handleNameChange,
              value: websiteName,
            }}
          />
        </div>
        <div className="form-group mt-8 mb-8">
          <Input
            label="Website Subtitle"
            inputProps={{
              type: "text",
              id: "text",
              name: "text",
              className: "input input-bordered w-full",
              onChange: handleSubtitleChange,
              value: websiteSubtitle,
            }}
          />
        </div>
        <div className="form-group">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {previewURL ? (
                <img
                  src={previewURL}
                  alt="Uploaded preview"
                  className="w-full h-64 object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              )}
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
export default WebsiteProfile