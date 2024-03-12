import React from "react";

export default function Heading({ children }) {
  return (
    <div className="text-4xl font-semibold flex justify-center items-center border-b-2 border-slate-500 pb-2 hover:cursor-pointer ">
      {children}
    </div>
  );
}
