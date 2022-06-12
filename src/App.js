import { HashRouter, Routes, Route } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import Characters from "./components/Characters";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserInput from "./components/UserInput";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div >
        <Routes>
        <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Characters />} />
            <Route path="/pokedex/:id" element={<CharacterDetail />} />
          </Route>
        </Routes>
      </div>
      <div className="pokebal">foot
<div className="pokeball" >footer</div>
<div className="layer-white">footer</div>
<div className="layer-red"></div>


</div>
    </HashRouter>
  );
}

export default App;
