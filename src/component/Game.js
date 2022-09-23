import { Link } from "react-router-dom";
import '../styles/Game.css'
import '../styles/Button.css'	

export default function Game() {
  return (
    <div className="container">
        <h3>Pieda Papel o tijera</h3>
      <div>
        <div className="Player">
          <div className="imagen">
            <img src="../images/papel1.png" alt="manos"></img>
          </div>
          <div>
            <h1>puntos</h1>
          </div>
        </div>

        <div className="puntos">
          <h1>Has gando</h1>   
        </div>

        <div className="PC">
          <div className="imagen">
            <img src="../images/papel1.png" alt="manos"></img>
          </div>
          <div>
            <h1>puntos</h1>
          </div>
        </div>
      </div>
      <div className="boton">
        <button>Jugar</button>
        <Link to={"/Game"} className="btn btn-primary">
          Reiniar
        </Link>
        <Link to={"/"} className="btn-principal ">
          Inicio
        </Link>
      </div>
    </div>
  );
}
