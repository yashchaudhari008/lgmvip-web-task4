import { useRef } from "react";

export const TextBox = ({ eleName, required }) => {
  const eleRef = useRef(null);

  return (
    <div className="formElement">
      <label htmlFor={eleName}>{eleName}: </label>
      <input
        name={eleName}
        ref={eleRef}
        required={required}
        placeholder={`Enter your ${eleName}`}
      ></input>
    </div>
  );
};

export const CheckBox = ({ eleName }) => {
  const eleRef = useRef(null);
  return (
    <div>
      <input type="checkbox" name={eleName} ref={eleRef}></input>
      <label htmlFor={eleName}>{eleName}</label>
    </div>
  );
};
