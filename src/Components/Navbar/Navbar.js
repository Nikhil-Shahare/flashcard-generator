import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div
      id="Navbar"
      className="mx-1/10 px-2 border-b-2 text-slate-400 font-sans flex  font-medium pt-4 pb-1  sm:mx-14 space-x-5 justify-start md:mx-28 space-x-10 "
    >
      <div>
        <a id="navItems" href="">
          Create new
        </a>
      </div>
      <div>
        <a id="navItems" href="">
          My Flashcard
        </a>
      </div>
    </div>
  );
}
export default Navbar;
