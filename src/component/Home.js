import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="Inicio">
        <h1>PIEDRA, PAPEL O TIJERA</h1>
        <img/>
        <Link to={'/Game'} className="btn-principal "> Jugar </Link>
        <Link to={'/Team'} className="btn-principal "> Desarrolladores </Link>
    </div>
  )
}