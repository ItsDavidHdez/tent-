import React from "react";
import { Link } from "react-router-dom";
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
          <Link
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            to="/"
          >
            <img src={logo} alt="Tenté" style={{ width: "130px" }} />
          </Link>
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
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="#"
              >
                <span className="text-white text-sm">Inicio</span>
              </Link>
            </li>

            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="#"
              >
                <span className="text-white text-sm">Quienes somos</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="#"
              >
                <span className="text-white text-sm">Nuestro producto</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="#"
              >
                <span className="text-white text-sm">Acerca del té</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="#"
              >
                <span className="text-white text-sm">Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
