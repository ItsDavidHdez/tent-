import React from "react";
import content from "../assets/img/info-product.jpg";

const Benefit = () => {
  return (
    <section id="about" className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="Beneficios de la Bomba Citrica"
              className="max-w-full rounded-lg shadow-lg"
              src={content}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="text-3xl font-semibold">
                Beneficios de Bomba Citrica
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Contiene ingredientes altos en vitaminas, los cuales tienen
                grandes beneficios para nuestro sistema inmunológico, lo que nos
                ayudará a aumentar nuestras defensas para no estar vulnerables a
                contraer infecciones y/ enfermedades de todo tipo, como son:
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fas fa-apple-alt"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Naranja</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fas fa-lemon"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Limón Canario</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fab fa-forumbee"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Miel</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fas fa-seedling"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Cúrcuma</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fas fa-pepper-hot"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Jenjible</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
