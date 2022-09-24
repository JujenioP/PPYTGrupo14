import { Link } from "react-router-dom";
import '../styles/Home.css'
import '../styles/Button.css'
export default function Home() {
  return (
    <div className="Inicio">
      <br></br>
      <br></br>
      <h1>PIEDRA, PAPEL O TIJERA</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/6688/6688560.png" alt="manos"/>
      <Link to={'/Game'} className="btn-principal"> Jugar </Link>
      <br></br>
      <Link to={'/Team'} className="btn-principal"> Desarrolladores </Link>
    </div>
  )
}