import React, { useState } from "react";

import Modal from "../components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

        {/* The button that will open the modal */}
        <button
          onClick={openModal}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Open Modal
        </button>

        {/* Render the Modal component */}
        <Modal
          isOpen={!isModalOpen}
          onClose={closeModal}
          title="Welcome to My Modal"
          body="This is a simple modal component with dynamic content passed via props."
        />
      </div>
    </>
  );
}
