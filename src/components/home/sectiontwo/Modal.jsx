import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-zinc-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-zinc-900 p-8 rounded-xl relative w-fit">
                <button
                    className="absolute top-0 right-0 mt-4 mr-5 text-3xl text-white"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="mt-5">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
