import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-zinc-900 p-4 rounded-md relative w-fit">
                <button
                    className="absolute top-0 right-0 mt-2 mr-3 text-2xl text-white"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="mt-6">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
