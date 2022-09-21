
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
import Home from "./component/Home";
import Game from "./component/Game";
import Team from "./component/Team";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Game" element={ <Game/> } />
        <Route path="/Team" element={ <Team/>} />
      </Routes>
    </BrowserRouter>
>>>>>>> 6da5bf379343a6c8eb5aea4164860c42931ececf
  );
}