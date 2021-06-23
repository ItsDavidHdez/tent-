import React from "react";

const ModalGinger = ({ setShowModal }) => {
  return (
    <div className="m-10">
      <button className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo">
        Open Modal
      </button>
      <div className="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-gray-300 bg-opacity-10 left-0 right-0 top-0 bottom-0">
        <div
          x-show="showModal"
          className="bg-white rounded-xl shadow-2xl p-6 sm:w-10/12 mx-10"
        >
          <span className="font-bold block text-2xl mb-3">
            Beneficios del Gengibre
          </span>
          <ul className="mb-5">
            <li>Regula el metabolismo.</li>
            <li>Alivia la congestión nasal.</li>
            <li>Previene migrañas.</li>
            <li>Mejora la circulación sanguínea.</li>
          </ul>
          <div className="text-right space-x-5 mt-5">
            <button
              className="px-4 py-2 text-sm bg-white rounded-xl border transition-colors duration-150 ease-linear border-gray-200 text-gray-500 focus:outline-none focus:ring-0 font-bold hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo"
              onClick={() => setShowModal(false)}
            >
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGinger;
