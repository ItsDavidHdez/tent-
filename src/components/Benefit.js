import React, { useState } from "react";
import lemon from "../assets/img/lemon.jpg";
import ginger from "../assets/img/ginger.jpg";
import honey from "../assets/img/honey.jpg";
import orange from "../assets/img/orange.jpg";
import turmeric from "../assets/img/turmeric.jpg";
import ModalOrange from "components/ModalOrange";
import ModalLemon from "./ModalLemon";
import ModalHoney from "./ModalHoney";
import ModalGinger from "./ModalGinger";
import ModalTurmeric from "./ModalTurmeric";

const Benefit = () => {
  const benefit = [
    {
      id: 1,
      title: "Beneficios de la naranja",
      img: `${orange}`,
    },
    {
      id: 2,
      title: "Beneficios del Limón Canario",
      img: `${lemon}`,
    },
    {
      id: 3,
      title: "Beneficios de la Miel",
      img: `${honey}`,
    },
    {
      id: 4,
      title: "Beneficios del Jengibre",
      img: `${ginger}`,
    },
    {
      id: 5,
      img: `${turmeric}`,
    },
  ];

  const [showOrange, setShowOrange] = useState(false);
  const [showLemon, setShowLemon] = useState(false);
  const [showHoney, setShowHoney] = useState(false);
  const [showGinger, setShowGinger] = useState(false);
  const [showTurmeric, setShowTurmeric] = useState(false);

  return (
    <>
      <section id="benefit" className="mb-24" style={{ marginTop: "35px" }}>
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
                onClick={() => {
                  if (key === 0) {
                    setShowOrange(true);
                    console.log(showOrange);
                  } else if (key === 1) {
                    setShowLemon(true);
                    console.log(showLemon);
                  } else if (key === 2) {
                    setShowHoney(true);
                    console.log(showHoney);
                  } else if (key === 3) {
                    setShowGinger(true);
                    console.log(showGinger);
                  } else {
                    setShowTurmeric(true);
                    console.log(showTurmeric);
                  }
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "337px" }}
                />
              </button>
              {!showOrange || <ModalOrange setShowModal={setShowOrange} />}
              {!showLemon || <ModalLemon setShowModal={setShowLemon} />}
              {!showHoney || <ModalHoney setShowModal={setShowHoney} />}
              {!showGinger || <ModalGinger setShowModal={setShowGinger} />}
              {!showTurmeric || (
                <ModalTurmeric setShowModal={setShowTurmeric} />
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefit;
