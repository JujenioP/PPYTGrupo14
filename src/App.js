import Home from './Home'
import Team from './Team';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
    </div>
  );
}

export default App;
