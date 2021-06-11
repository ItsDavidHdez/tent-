import React from "react";
import rec1 from "../assets/img/rec1.jpg";
import rec2 from "../assets/img/rec2.jpeg";
import rec3 from "../assets/img/rec3.jpg";

const Recommendations = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-center text-center mb-16">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">Recomendaciones</h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-16 mb-24">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div
                className="inline-block relative overflow-hidden"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={rec1}
                  alt="Maria Isabel Rodriguez Sanchez"
                  style={{
                    width: "auto",
                    marginTop: "0px",
                    marginLeft: "0px",
                  }}
                />
              </div>
              <h6 className="text-xl font-semibold">
                MARIA ISABEL RODRIGUEZ SANCHEZ
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                “Hola, he consumido tu producto y me ha resultado muy bien, por
                las mañanas tenia alergias y dolor de garganta, desde que lo he
                tomado me ha ido mejor y la alergia se calma. Muchas gracias,
                seguire tomando el té y además de que esta muy rico.”
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div
                className="inline-block relative overflow-hidden"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={rec2}
                  alt="Ana Laura Huitrón Najera"
                  style={{
                    width: "auto",
                    marginTop: "0px",
                    marginLeft: "0px",
                  }}
                />
              </div>
              <h6 className="text-xl font-semibold">
                ANA LAURA HUITRÓN NAJERA
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                “Muchas gracias Tenté, ya he consumido 2 veces su producto y me
                ha resultado de maravilla.”
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 w-full md:w-4/12 px-4 text-center pt-20">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div
                className="inline-block relative overflow-hidden"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={rec3}
                  alt="Ingrid Stephania Olivares Olivera"
                  style={{
                    width: "auto",
                    marginTop: "0px",
                    marginLeft: "0px",
                  }}
                />
              </div>
              <h6 className="text-xl font-semibold">
                INGRID STEPHANIA OLIVARES OLIVERA
              </h6>
              <p className="mt-2 mb-4 text-gray-600">
                "Excelente producto, me sirvió muchísimo, lo recomiendo.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
