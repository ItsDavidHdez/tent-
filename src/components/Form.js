import React, { useState, useRef } from "react";
import { toEmail, handleSubmitEmail } from "../utils/";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChangeTetx = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const buttonMailTo = useRef(null);

  return (
    <section>
      <a
        ref={buttonMailTo}
        style={{ opacity: 0 }}
        href={toEmail(state.name, state.email, state.message)}
        id="mailto"
      >
        mail
      </a>
      <form
        id="form"
        className="relative block py-24 lg:pt-0 bg-gray-900"
        action="/send-email"
        method="POST"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 mt-16	">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    ¿Desea adquirir nuestro producto?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete este formulario y nos comunicaremos con usted en
                    menos de 24 horas.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Nombre completo"
                      style={{
                        transition: "all .15s ease",
                      }}
                      onChange={(value) =>
                        handleChangeTetx("name", value.target.value)
                      }
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Correo electronico"
                      style={{
                        transition: "all .15s ease",
                      }}
                      onChange={(value) =>
                        handleChangeTetx("email", value.target.value)
                      }
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Escribe un mensaje..."
                      onChange={(value) =>
                        handleChangeTetx("message", value.target.value)
                      }
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{
                        transition: "all .15s ease",
                      }}
                      onClick={(e) => handleSubmitEmail(e, buttonMailTo)}
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
