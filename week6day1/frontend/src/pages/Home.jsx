import React, { useState } from "react";
import Modal from "../components/ui/Modal";

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
      <div>
        <h3 className="text-3xl font-bold font-serif">Hello Homepage</h3>
        <button
          onClick={openModal}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Open Modal
        </button>
      </div>
      <Modal
        title="Get started"
        isOpen={isModalOpen}
        onClose={closeModal}
        description="Do you really want to get started as an user in our website?"
      />
    </>
  );
}
