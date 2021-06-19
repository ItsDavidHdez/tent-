import React, { useState } from "react";
import lemon from "../assets/img/lemon.jpg";
import ginger from "../assets/img/ginger.jpg";
import honey from "../assets/img/honey.jpg";
import orange from "../assets/img/orange.jpg";
import turmeric from "../assets/img/turmeric.jpg";
import ModalLayout from "components/ModalLayout";

const Benefit = () => {
  const benefit = [
    {
      title: "Beneficios de la naranja",
      description: `
        • Ayuda a prevenir la diabetes
        •	Refuerza el sistema inmunológico
        •	Reduce el colesterol 
        •	Mejora el funcionamiento cardiovascular`,
      img: `${orange}`,
    },
    {
      title: "Beneficios del Limón Canario",
      description: `
      •	Es un excelente antioxidante
      •	Evita resfriados 
      •	Favorece la correcta digestión
      •	Promueve la pérdida de peso
    `,
      img: `${lemon}`,
    },
    {
      title: "Beneficios de la Miel",
      description: `
      •	Es un excelente antioxidante
      •	Evita resfriados 
      •	Favorece la correcta digestión
      •	Promueve la pérdida de peso
    `,
      img: `${honey}`,
    },
    {
      title: "Beneficios del Jengibre",
      description: `
      •	Es un excelente antioxidante
      •	Evita resfriados 
      •	Favorece la correcta digestión
      •	Promueve la pérdida de peso
    `,
      img: `${ginger}`,
    },
    {
      title: "Beneficios de la Cúrcuma",
      description: `
      •	Disminuye el colesterol \n
      •	Promueve la pérdida de peso \n
      •	Favorece el buen funcionamiento del hígado \n
      •	Mejora la circulación \n
    `,
      img: `${turmeric}`,
    },
  ];

  // let x = Object.entries(benefit);
  // x.forEach((element) => console.log(element[1]));

  const [showModal, setShowModal] = useState(false);
  const [showOrange, setShowOrange] = useState(false);
  const [showLemon, setShowLemon] = useState(false);
  const [showHoney, setShowHoney] = useState(false);
  const [showGinger, setShowGinger] = useState(false);
  const [showTurmeric, setShowTurmeric] = useState(false);

  return (
    <>
      <section className="mb-24" style={{ marginTop: "35px" }}>
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mb-24">
          <div className="text-center">
            <h3 className="text-3xl font-semibold">
              Beneficios de Bomba Citrica
            </h3>
          </div>
        </div>
        <div className="flex justify-between">
          {benefit.map((item, key) => (
            <div key={key}>
              <button
                onClick={(title, description) => {
                  setShowModal(true);
                  return (
                    <ModalLayout
                      title={title}
                      description={description}
                      setShowModal={setShowModal}
                    />
                  );
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "337px" }}
                />
              </button>
              {!showModal || (
                <ModalLayout
                  title={item.title}
                  description={item.description}
                  setShowModal={setShowModal}
                />
              )}
              {/* <button key={key} onClick={() => setShowModal(true)}>
                <img
                  src={item.imgs[1]}
                  alt={item.title[1]}
                  style={{ width: "230px" }}
                />
              </button> */}
            </div>
          ))}
          {/* 
          <img src={honey} alt="Miel" style={{ width: "205px" }} />
          <img src={orange} alt="Naranja" style={{ width: "270px" }} />
          <img src={turmeric} alt="Cúrcuma" style={{ width: "287px" }} /> */}
        </div>
      </section>
    </>
  );
};

export default Benefit;
