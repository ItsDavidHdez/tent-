import React, { useState } from "react";
import tente from "../assets/img/tente.jpg";
import Collage from "components/Collage";
import { SliderData } from "./SliderData";

const Product = () => {
  const [showCollage, setShowCollage] = useState(false);
  return (
    <>
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
                inmunológico lo que nos ayudará a aumentar las defensas de
                nuestro cuerpo para no estar vulnerables a contraer infecciones
                y/o enfermedades de todo tipo.
              </p>
              <button onClick={() => setShowCollage(true)}>Click me</button>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-6">
              <div className="mb-6">
                <img
                  alt="Producto"
                  src={tente}
                  className="w-full align-middle rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {!showCollage || (
        <Collage slides={SliderData} setShowCollage={setShowCollage} />
      )}
    </>
  );
};

export default Product;
