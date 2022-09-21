import { Link } from "react-router-dom";

export default function Game() {
    return (
        <div className="container">
            <div>
                <div>
                    <div>
                        
                    </div>
                    <div>
                    
                    </div>
                </div>

                <div>

                </div>

                <div>
                    <div>
                    
                    </div>
                    <div>
                    
                    </div>
                </div>
                
                
            </div>
            <div>
                <button>Jugar</button>
                <Link to={'/Game'} className="btn btn-primary">Reiniar</Link>
                <Link to={'/'} className="btn-principal ">Inicio</Link>
            </div>
            

        </div>
    )
}