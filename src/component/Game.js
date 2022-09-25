import { Link } from "react-router-dom";
import '../assets/styles/Game.css'
import '../assets/styles/Button.css'	

import ImgPiedra from '../assets/images/piedra1.png'
import ImgPapel from '../assets/images/papel1.png'
import ImgTijera from '../assets/images/tijera1.png'

import Jugador from "./Jugador";
import Maquina from "./Maquina";

import { useState } from "react";

export default function Game() {
  let TIE = 0;
  let WINJ1 = 1;
  let WINJ2 = 2;

  const arrayImage = [ImgPiedra, ImgPapel, ImgTijera];

  const [imagenJ1, setImagenJ1] = useState(ImgPiedra);
  const [imagenJ2, setImagenJ2] = useState(ImgPiedra);

  const [puntajeJ1, setPuntajeJ1] = useState(0);
  const [puntajeJ2, setPuntajeJ2] = useState(0);

  const [mensaje, setMensaje] = useState("Listo para jugar");

  function Play() {
    let eleccion1 = Math.floor(Math.random() * 3);//Numero random para jugador 1
    let eleccion2 = Math.floor(Math.random() * 3);//Numero random para jugador 2

    const resultado = calcResult(eleccion1, eleccion2);

    switch (resultado) {
      case TIE:
          setMensaje("Empate");
          break;
      case WINJ1:
          setPuntajeJ1(puntajeJ1 + 1);
          setMensaje("Gano Jugador 1");
          break;
      case WINJ2:
          setPuntajeJ2(puntajeJ2+ 1);
          setMensaje("Gano Jugador 2");
          break;
    }

    eleccionJ1(eleccion1);
    eleccionJ2(eleccion2);
  }

  function RePlay() {
    setMensaje("Listo para jugar");
    setPuntajeJ1(0);
    setPuntajeJ2(0);
    setImagenJ1(ImgPiedra);
    setImagenJ2(ImgPiedra);
  }

  function calcResult(userOption, machineOption) {
    let ROCK = 0;
    let PAPER = 1;
    let SCISSORS = 2;
    if (userOption === machineOption) {
      return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return WINJ2;
        if (machineOption === SCISSORS) return WINJ1;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return WINJ2;
        if (machineOption === ROCK) return WINJ1;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return WINJ2;
        if (machineOption === PAPER) return WINJ1;
    }
  }

  function eleccionJ1(numeroRandom) {
    setImagenJ1(arrayImage[numeroRandom]);
    console.log("Jugador1 " + numeroRandom);
  }

  function eleccionJ2(numeroRandom) {
    setImagenJ2(arrayImage[numeroRandom]);
    console.log("Jugador2 " + numeroRandom);
  }

  return (
    <div className="container">
        <h1>Pieda Papel o tijera</h1>
        <div className="jugadores">
            <Jugador 
                titulo="Jugador 1"
                imagen={imagenJ1}
                puntaje={puntajeJ1}
            />
            <div className="result">
                <h3>Resutado</h3>
                <p>{mensaje}</p>
            </div>
            <Maquina 
                titulo="Jugador 2"
                imagen={imagenJ2}
                puntaje={puntajeJ2}
            />
        </div>
        <div className="botones">
          <button onClick={Play}>Jugar</button>
          <button onClick={RePlay}>Reiniciar</button>
          <Link to={"/"} className="btn">
            Inicio
          </Link>
        </div>
    </div>
  );
}
