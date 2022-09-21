import { Link } from "react-router-dom";
import '../styles/Home.css'
export default function Game() {
  return (
    <div className="container-principal">
        <h1 className="title-page">EMPIEZA A JUGAR</h1>
        <div className="container-players result">
            <div className="jugador">
                {/* Este div contendra las imagenes a azar del jugador*/}
                <div className="imagen-objeto">
                    <img src="#"/>
                </div>
                {/* Este div contendra las puntos del jugador*/}
                <div className="puntos">
                    Puntos: 
                </div>
            </div>
            {/* Este div mostrara quien gano o si hay empate*/}
            <div className="result">

            </div>
            {/* Este div contendra las imagenes a azar del jugador*/}
            <div className="jugador">
                {/* Este div contendra las imagenes a azar del jugador*/}
                <div className="imagen-objeto">
                    <img src="#"/>
                </div>
                {/* Este div contendra las puntos del jugador*/}
                <div className="puntos">
                    Puntos: 
                </div>
            </div>
        </div>
        <div className="buttons-game">
            <button className="button-jugar">
                Jugar
            </button>
            <button className="button-restar">
                ReIniciar
            </button>
            <button>
                <Link to={"/"} className="btn-principal ">
                Inicio
                </Link> 
            </button>
        </div>
    </div>
  );
}
