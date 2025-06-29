"use client";
import { useRouter } from "next/navigation";
import React from "react";
 

const Modal = ({ id }: {id:string}) => {
 
    const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full text-center relative animate-fadeIn">
        <img
          src=''
          alt="Modal Content"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p>Modal Image Id - {id}</p>
        <button onClick={() => router.back()} className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
