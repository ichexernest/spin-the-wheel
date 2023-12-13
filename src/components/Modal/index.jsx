import { Children, useState } from "react";

function SharedModal({ id,title, children}) {

  return (
    <div
      id={id}
      className="absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 transition duration-100 z-50"
    >
      <div className="w-full max-h-[90vh] bg-white rounded-xl shadow-lg p-3 m-10 overflow-y-auto">
      <div className="flex justify-center items-center">
        <span className="px-2 font-bold text-xl text-slate-800">
          {title}
        </span>
      </div>
    {children}
    </div>
  </div>
  );
}

export default SharedModal;
