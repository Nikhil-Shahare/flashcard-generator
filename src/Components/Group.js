import React from "react";

function Group() {
  return (
    <div>
      <form>
        <div className="bg-white px-10 py-10 my-5 ">
          <div id="createGroup" className="flex mb-4">
            <div class="w-1/3 mr-5">
              <label
                class="block text-slate-400 font-sans font-semibold mb-2 "
                for="username"
              >
                Create Group*
              </label>
              <input
                className="self-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-15 "
                id="username"
                type="text"
                placeholder="write the name you want to give to group"
              />
            </div>
            <div className="w-1/3">
              <div className="h-1/2  ">
                <input type="file" placeholder="add Image " />
              </div>
              <div className="h-1/2 self-baseline border rounded "></div>
            </div>
            <div class="w-1/3 bg-gray-400 h-12"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Group;
