import { Link } from "react-router-dom";
import '../styles/Team.css'
import '../styles/Button.css'

export default function Team() {
    return (
        <div className="container-team">
            <h1>Equipo de Trabajo</h1>
            <div className="team">
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/MaxAbelMamani"> Maximiliano Abel Mamani </a>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/MatiasGrrrOrtega"> Matias Gabriel Ortega </a>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/MaxLeonel"> Bustamante Maximiliano L.</a>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/Agmor03"> Agustina M. A. Morales </a>  
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/Agmor03"> Matias Alan Cruz Aruzamen</a> 
                </div>
            </div>
            <div className="boton-team">
                <Link to={'/'} className="btn">Inicio</Link>
            </div>
        </div>
    )
}