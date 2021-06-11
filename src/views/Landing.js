import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import oranges from "../assets/img/naranjas.jpg";
import Team from "../components/Team";
import Form from "components/Form";
import AboutUs from "components/AboutUs";
import Product from "components/Product";
import Benefit from "components/Benefit";
import Recommendations from "components/Recommendations";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          id="home"
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "100vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${oranges})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Bienvenido a Tenté
                  </h1>
                  <p className="mt-4 text-xl text-gray-300">
                    Proporcionamos una infusión de la mejor procedencia, conoce
                    las valiosas propiedades y beneficios que contiene para
                    ayudarte a tener una vida más saludable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Product />
        <Benefit />
        <Recommendations />
        <AboutUs />
        <Team />
        <Form />
      </main>
      <Footer />
    </>
  );
}
