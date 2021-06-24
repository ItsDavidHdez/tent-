import React from "react";
import logo from "../assets/img/logo.png";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 z-50 w-full"
          : "relative shadow-lg bg-transparent shadow-lg fixed") +
        " flex flex-wrap items-center justify-between px-2 py-3 fixed	content-center bg-gray-400"
      }
      style={{ height: "70px", backgroundColor: "rgba(24, 24, 27, 0.4)" }}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="#home"
          >
            <img src={logo} alt="Tenté" style={{ width: "130px" }} />
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none lg:bg-gray-400 " +
            (navbarOpen ? "block rounded shadow-lg mt-40 bg-white " : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <button
                className={navbarOpen ? "w-full" : ""}
                onClick={() => setNavbarOpen(false)}
              >
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (navbarOpen ? "w-full" : "")
                  }
                  href="#home"
                  onClick={() => setNavbarOpen(navbarOpen)}
                >
                  <span
                    className={
                      "text-white text-sm " +
                      (navbarOpen ? "text-gray-700	" : "text-white")
                    }
                  >
                    Inicio
                  </span>
                </a>
              </button>
            </li>
            <li className="flex items-center">
              <button
                className={navbarOpen ? "w-full" : ""}
                onClick={() => setNavbarOpen(false)}
              >
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (navbarOpen ? "w-full" : "")
                  }
                  href="#empresa"
                >
                  <span
                    className={
                      "text-white text-sm " +
                      (navbarOpen ? "text-gray-700" : "text-white")
                    }
                  >
                    Quienes somos
                  </span>
                </a>
              </button>
            </li>
            <li className="flex items-center">
              <button
                className={navbarOpen ? "w-full" : ""}
                onClick={() => setNavbarOpen(false)}
              >
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (navbarOpen ? "w-full" : "")
                  }
                  href="#product"
                >
                  <span
                    className={
                      "text-white text-sm " +
                      (navbarOpen ? "text-gray-700" : "text-white")
                    }
                  >
                    Nuestro producto
                  </span>
                </a>
              </button>
            </li>
            <li className="flex items-center">
              <button
                className={navbarOpen ? "w-full" : ""}
                onClick={() => setNavbarOpen(false)}
              >
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (navbarOpen ? "w-full" : "")
                  }
                  href="#benefit"
                >
                  <span
                    className={
                      "text-white text-sm " +
                      (navbarOpen ? "text-gray-700" : "text-white")
                    }
                  >
                    Beneficios
                  </span>
                </a>
              </button>
            </li>
            <li className="flex items-center">
              <button
                className={navbarOpen ? "w-full" : ""}
                onClick={() => setNavbarOpen(false)}
              >
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold " +
                    (navbarOpen ? "w-full" : "")
                  }
                  href="#form"
                >
                  <span
                    className={
                      "text-white text-sm " +
                      (navbarOpen ? "text-gray-700" : "text-white")
                    }
                  >
                    Contacto
                  </span>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
