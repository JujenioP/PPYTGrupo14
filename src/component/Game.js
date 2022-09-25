import { Link } from "react-router-dom";
import '../styles/Game.css'
import '../styles/Button.css'	

export default function Game() {
  return (
    <div className="container">
        <h1 className="">Pieda Papel o tijera</h1>
        <div className="jugadores">
            <div className="player">
                <div className="imagen">
                    <img src="../images/papel1.png" alt="manos"></img>
                </div>
                <div className="punto">
                    <p>Puntos: 0</p>
                </div>
            </div>
            <div className="result">
                Resultado
            </div>
            <div className="maquina">
                <div className="imagen">
                    <img src="../images/papel1.png" alt="manos"></img>
                </div>
                <div className="punto">
                    <p>Puntos: 0</p>
                </div>
            </div>
        </div>
        <div className="botones">
          <button>Jugar</button>
          <Link to={"#"} className="btn">
            Reiniciar
          </Link>
          <Link to={"/"} className="btn">
            Inicio
          </Link>
        </div>
    </div>
  );
}
