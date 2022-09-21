import { Link } from "react-router-dom";

export default function Team() {
    return (
        <div className="container">
            <h1>Equipo de Trabajo</h1>
            <div>
                <div>
                    <img />
                    <h3>Maximiliano Abel Mamani</h3>
                </div>
                <div>
                    <img />
                    <h3>Matias Gabriel Ortega</h3>
                </div>
                <div>
                    <img />
                    <h3>Maximiliano Leonel Bustamante</h3>
                </div>
                <div>
                    <img />
                    <h3>Agustina Morales</h3>
                </div>
                <div>
                    <img />
                    <h3>Matias Alan Cruz Aruzamen</h3>
                </div>
            </div>
            <Link to={'/'} className="btn-principal ">Inicio</Link>
        </div>
    )
}