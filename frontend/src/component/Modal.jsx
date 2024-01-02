import { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit({ name, email });
    onClose();
  };

  return (
    <div
      className={`modal  absolute inset-0 bg-gray-900 bg-opacity-50 top-0 left-0
       ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      style={{ zIndex: 1000 }}
    >
      <div
        className="modal-overlay absolute 
        w-full h-full inset-0 flex items-center justify-center
        
        "
      >
        <div className="modal-container max-w-6xl mx-auto rounded shadow-lg z-50 bg-white p-4">
          <span
            className="modal-close absolute top-0 right-0 cursor-pointer p-4 z-50"
            onClick={onClose}
          >
            &times;
          </span>
          <div className="p-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="p-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
