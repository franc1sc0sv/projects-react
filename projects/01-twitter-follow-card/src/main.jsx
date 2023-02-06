//Punto de entranda de nuestra aplicacion
import React from "react";
import useState from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainCard } from "./MainCard.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const formatUserName = (user) => `@${user}`;
// const formateddElement = (user) => <span>@{user}</span>;
///Se le pueden pasar todas las props de una con un objeto que contenga todos los elementos
//{...object} - Pero es mala practica xD
//Rest operator GOD

root.render(
  <React.Fragment>
    <MainCard></MainCard>
  </React.Fragment>
);
//2horas
