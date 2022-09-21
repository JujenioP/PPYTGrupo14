import { Link } from "react-router-dom";
import '../styles/Home.css'
export default function Home() {
    return (
        <div className="container-principal">
            <h1 className="title-page">PIEDRA, PAPEL O TIJERA</h1>
            <img src="#" alt="imagen-juego"/>
            <div className="buttons-home">
            </div>
            <button>
                <Link to={'/Game'} className="btn-principal "> Jugar </Link>
            </button>
            <button>
                <Link to={'/Team'} className="btn-principal "> Desarrolladores </Link>
            </button>
        </div>
    )
}