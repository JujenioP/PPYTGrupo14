import { Link } from "react-router-dom";
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="Inicio">
        <h1>PIEDRA, PAPEL O TIJERA</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/6688/6688560.png" alt="manos"/>
        <Link to={'/Game'} className="btn-principal "> Jugar </Link>
        <Link to={'/Team'} className="btn-principal "> Desarrolladores </Link>
    </div>
  )
}