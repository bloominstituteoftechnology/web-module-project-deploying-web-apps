import React from "react";

const DoggoForm = (props) => {
  return (
    <div className="DoggoForm">
      <form id="DoggoForm">
        <label className="formlabel">
          Name
          <input type="text" />
        </label>
        <label className="formlabel">
          Breed
          <input type="text" />
        </label>
        <label className="formlabel">
          Age
          <input type="text" />
        </label>
        <label className="formlabel">
          Favorite Thing
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default DoggoForm;
