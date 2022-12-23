import React, { useState } from "react";

function AddTerm() {
  const [value, setValue] = useState([
    { Eterm: "", Edescription: "", addImage: "" },
  ]);
  return (
    <div>
      <form>
        <input></input>
      </form>
    </div>
  );
}
export default AddTerm;
