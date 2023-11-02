import React, { useState } from "react";

export default function ToggleTheme() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (isChecked) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsChecked(!isChecked);
    console.log("hadleCheckboxChange()");
  };

  return (
    // <div>
    //   <input type="checkbox" className="sr-only" onChange={handleCheckBoxChange} />
    //   <span className={`slider mx-4 flex h-8 w-14 items-center rounded-full bg-slate-300 p-1 shadow-inner duration-200 ${
    //           isChecked ? 'bg-primary' : 'bg-dark'
    //         }`}>
    //     <span className={`dot h-6 w-6 rounded-full bg-zinc-50 duration-200  transition ${
    //           isChecked ? 'translate-x-full' : ''
    //         }`}></span>
    //   </span>
    // </div>

    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full shadow-inner ${
              isChecked ? "bg-highlight" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-lightprimary transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
}
