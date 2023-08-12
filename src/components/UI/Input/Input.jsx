import React, { useRef, useImperativeHandle } from "react";

function Input({ value, onChange, onBlur, label, id, isValid, type }, ref) {
  const inputRef = useRef();

  /*RARE SCENARIO DON'T OVERUSE */
  function activate() {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, () => {
    return {
      activate,
    };
  });

  return (
    <div
      className={`mx-0 my-4 flex flex-col items-stretch md:flex-row md:items-center`}
    >
      <label
        className={`mb-2 block flex-1 font-bold text-[#464646]`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`flex-[3] rounded-md border border-[#ccc] p-1 focus:border-[#4f005f] focus:bg-[#f6dbfc] focus:outline-none ${
          isValid === false ? "border-red-700 bg-[#fbdada]" : ""
        } `}
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}

export default React.forwardRef(Input);
