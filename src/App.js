import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Team from './component/Team'
import Game from './component/Game'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Team" element={ <Team/> } />
        <Route path="/Game" element={ <Game/>} />
      </Routes>
    </BrowserRouter>
  );
}