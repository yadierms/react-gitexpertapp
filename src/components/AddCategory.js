import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [textValue, setTextValue] = useState("");

  const handleInput = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textValue.trim().length > 2) {
      setCategories((cats) => [textValue, ...cats]);
      setTextValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} value={textValue} onChange={handleInput} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
