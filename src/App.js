export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Game" element={ <Game/> } />
        <Route path="/Team" element={ <Team/>} />
      </Routes>
    </BrowserRouter>
  );
}