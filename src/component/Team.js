import { Link } from "react-router-dom";
import '../styles/Team.css'
import '../styles/Button.css'

export default function Team() {
    return (
        <div className="container">
            <h1>Equipo de Trabajo</h1>
            <div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a  target='_blank' rel="noreferrer" href="https://github.com/MaxAbelMamani"> Maximiliano Abel Mamani </a>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a  target='_blank' rel="noreferrer" href="https://github.com/MatiasGrrrOrtega"> Matias Gabriel Ortega </a>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a  target='_blank' rel="noreferrer" href="https://github.com/MaxLeonel"> Bustamante Maximiliano L.</a>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a  target='_blank' rel="noreferrer" href="https://github.com/Agmor03"> Agustina M. A. Morales </a>  
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <a  target='_blank' rel="noreferrer" href="https://github.com/Agmor03"> Matias Alan Cruz Aruzamen</a> 

                </div>
            </div>
            <Link to={'/'} className="btn-principal">Inicio</Link>
        </div>
    )
}