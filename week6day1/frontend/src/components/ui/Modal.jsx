import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
}) {
  if (!isOpen) {
    return null;
  }
  const notify = () => {
    toast("Wow so easy !");
  };

  return (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm p-6 bg-white rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          <IoCloseSharp size={24} />
        </button>

        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>

        <div className="text-gray-600 mb-6">
          <p>{description}</p>
          {children}
        </div>

        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700 transition-colors"
            onClick={notify}
          >
            Yes
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
