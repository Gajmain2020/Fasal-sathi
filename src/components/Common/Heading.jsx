/* eslint-disable react/prop-types */
export default function Heading({ children }) {
  return (
    <div className="text-4xl font-semibold flex justify-center items-center border-b-2 border-slate-500 pb-2 mt-2 ">
      {children}
    </div>
  );
}
