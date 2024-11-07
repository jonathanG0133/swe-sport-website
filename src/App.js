import "./App.css";
import Navigation from "./Navigation";
import HomePage from "./Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import League from "./Pages/League";
import Foooter from "./navigation/Foooter";

function App() {
  const allSvenskan = "Allsvenskan";
  const Superettan = "Superettan";
  const Damallsvenskan = "Damallsvenskan";
  const Superligan = "Superligan";
  const SHL = "SHL";
  const SDHL = "SDHL";

  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/AllSvenskan"
          element={<League leagueName={allSvenskan} />}
        />
        <Route
          path="/Superettan"
          element={<League leagueName={Superettan} />}
        />
        <Route
          path="/Damallsvenskan"
          element={<League leagueName={Damallsvenskan} />}
        />
        <Route
          path="/Superligan"
          element={<League leagueName={Superligan} />}
        />
        <Route path="/SHL" element={<League leagueName={SHL} />} />
        <Route path="/SDHL" element={<League leagueName={SDHL} />} />
      </Routes>
      <Foooter />
    </HashRouter>
  );
}

export default App;
