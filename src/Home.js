import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="container">
        <h1>PIEDRA, PAPEL O TIJERA</h1>
        <img/>
        <div>
            <button>
                <Link to=''>JUGAR</Link>
            </button>
            <button>
                <Link to='/Team'>DESARROLLADORES</Link>
            </button>
        </div>
    </div>
  )
}

export default Home