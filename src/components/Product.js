import React from "react";
import product from "../assets/img/product.jpg";

const Product = () => {
  return (
    <section id="product" className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mt-24">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              ¡Conoce Bomba Cítrica!
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Nuestra infusión estrella la cual contiene ingredientes altos en
              vitaminas, con grandes beneficios para nuestro sistema
              inmunológico lo que nos ayudará a aumentar las defensas de nuestro
              cuerpo para no estar vulnerables a contraer infecciones y/o
              enfermedades de todo tipo.
            </p>
            <a href="#" className="font-bold text-gray-800 mt-8">
              ¡Checa esto!
            </a>
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
              <img
                alt="Producto"
                src={product}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px",
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-pink-600 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
