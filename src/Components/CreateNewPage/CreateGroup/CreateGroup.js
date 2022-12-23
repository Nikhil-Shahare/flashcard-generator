import React from "react";
import UploadImage from "../uploadimage/Uploadimage";

function CreateGroup() {
  return (
    <div className="mx-2 mt-5 bg-red sm:mx-14 md:mx-28 flex ">
      <div id="creategroup" className="w-full ">
        <form>
          <div
            id="creategroup"
            className="bg-white pl-7 pt-4 pb-8 text-base text-slate-500 rounded-md space-y-2 shadow-lg shadow-slate-300"
          >
            <label for="gname">Create Group*</label>
            <br />
            <div id="gap" className="flex-wrap  sm: flex space-x-10">
              <input
                type={"text"}
                id="gname"
                name="group name"
                className="rounded-md w-11/12 sm:w-1/4 mb-3 border-2 border-current p-2 "
                placeholder="write the name of group"
              ></input>
              <UploadImage />
            </div>
            <div className="space-y-2">
              <label for="Description" className="">
                Add Description*
              </label>
              <br />
              <input
                type={"text"}
                id="Description"
                name="add Description"
                className="rounded-md w-9/12 h-16 border-2 border-current p-2  "
                placeholder="add description of the group"
              ></input>
            </div>
          </div>

          <br />
        </form>
      </div>
    </div>
  );
}
export default CreateGroup;
