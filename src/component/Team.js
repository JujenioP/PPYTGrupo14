import { Link } from "react-router-dom";
import '../styles/Team.css'
export default function Team() {
    return (
        <div className="container-principal">
            <h1 className="title-page">Equipo de Trabajo</h1>
            <div className="container-equipo">
                <div className="perfil-derrollador">
                    <img src="#" alt="imagen-desarrollador"/>
                    <h3>Maximiliano Abel Mamani</h3>
                </div>
                <div className="perfil-derrollador">
                    <img src="#" alt="imagen-desarrollador"/>
                    <h3>Matias Gabriel Ortega</h3>
                </div>
                <div className="perfil-derrollador">
                    <img src="#" alt="imagen-desarrollador"/>
                    <h3>Maximiliano Leonel Bustamante</h3>
                </div>
                <div className="perfil-derrollador">
                    <img src="#" alt="imagen-desarrollador"/>
                    <h3>Agustina Morales</h3>
                </div>
                <div className="perfil-derrollador">
                    <img src="#" alt="imagen-desarrollador"/>
                    <h3>Matias Alan Cruz Aruzamen</h3>
                </div>
            </div>
            <button>
                <Link to={'/'} className="btn-principal ">Inicio</Link>
            </button>
        </div>
    )
}