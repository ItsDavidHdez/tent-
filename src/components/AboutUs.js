import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="pb-20 relative block bg-gray-900" id="empresa">
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
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Nuestra empresa
              </h2>
              <h3 className="text-3xl font-semibold text-white mt-6">Origen</h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Tenté se creó en Octubre de 2020 en Cerro azul, Veracruz por 6
                Universitarios de Ingeniería En Gestión Empresarial con la gran
                satisfacción, entrega y compromiso de poner su granito de arena
                a la actualidad en México. En momentos de vulnerabilidad nos
                damos cuenta de lo importante que es tener buenas defensas, pues
                son las que se encargan de proteger nuestro cuerpo de patógenos
                externos que nos causan enfermedades, si están bajas el
                organismo se vuelve vulnerable a los ataques de virus y
                bacterias. Ahi fué donde nació la idea de realizar un producto
                completamente diferente e innovador que ayudaría a las personas
                a fortalecer su sistema inmunológico.
              </p>
              <h3 className="text-3xl font-semibold text-white mt-8">
                ¿Qué hacemos?
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Tenté formula un producto totalmente diferente, con ingredientes
                que son conocidos y que gracias a las favorables propiedades que
                éstos presentan llevamos a las personas la ayuda necesaria a sus
                defensas para su día a día.
              </p>
              <h3 className="text-3xl font-semibold text-white mt-8">
                ¿Quienes somos?
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Tenté es una Empresa socialmente responsable. Nuestro equipo de
                trabajo está totalmente dedicado a satisfacer las necesidades de
                las personas. Nos enorgullece ser una empresa Mexicana y estamos
                comprometidos a promover el comercio justo de los pequeños
                agricultores dentro del Estado de Veracruz , cuyo principal
                ingreso es la siembra de cultivos de los ingredientes con los
                que elaboramos nuestro producto.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Misión</h6>
              <p className="mt-2 mb-4 text-gray-500">
                Proporcionar a nuestros consumidores una infusión de la mejor
                procedencia, dándoles a conocer las valiosas propiedades
                orgánicas y los beneficios que contiene para ayudarlos a tener
                una vida más saludable.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Visión</h5>
              <p className="mt-2 mb-4 text-gray-500">
                Lograr ser una empresa reconocida nacionalmente gracias a
                nuestros productos 100% orgánicos y con azúcares naturales que
                ayudan al fortalecimiento del sistema inmunológico.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Valores</h5>
              <ul className="mt-2 mb-4 text-gray-500">
                <li>Proactividad</li>
                <li>Compromiso</li>
                <li>Integridad</li>
                <li>Trabajo en equipo</li>
                <li>Pertenencia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
