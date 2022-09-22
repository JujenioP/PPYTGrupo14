import { Link } from "react-router-dom";
import '../styles/Team.css'
export default function Team() {
    return (
        <div className="container">
            <h1>Equipo de Trabajo</h1>
            <div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <h3>Maximiliano Abel Mamani</h3>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <h3>Matias Gabriel Ortega</h3>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <h3>Maximiliano L. Bustamante</h3>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <h3>Agustina M. A. Morales</h3>
                </div>
                <div className="NyF">
                    <img src="../images/Matias_Ortega.jpg" alt="..."/>
                    <h3>Matias Alan Cruz Aruzamen</h3>
                </div>
            </div>
            <Link to={'/'} className="btn-principal ">Inicio</Link>
        </div>
    )
}