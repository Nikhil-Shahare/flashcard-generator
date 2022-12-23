import React from "react";
import "./Uploadimage.css";
import { ImFolderUpload } from "react-icons/im";
function UploadImage() {
  return (
    <div>
      <input type={"file"} id="img" accept="image/*" />
      <label
        for="img"
        className=" mx-2 w-36 border-2 rounded-md border-blue-500 bg-blue-100 text-blue-700 flex hover:bg-blue-300 "
      >
        <ImFolderUpload className=" h-4 w-4 mr-1 mt-1 ml-1" />
        Upload image
      </label>
    </div>
  );
}
export default UploadImage;

//    <div className="flex space-x-1 border-2 h-10 p-1 border-blue-700 text-neutral-600 bg-sky-300 hover:bg-sky-700 rounded-lg items-center"> */}
// </div>
