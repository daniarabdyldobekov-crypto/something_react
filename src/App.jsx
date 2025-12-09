import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Abaddon from "./pages/Abaddon";
import Alchemist from "./pages/Alchemist";
import AncientApparition from "./pages/AncientApparition";
import AntiMage from "./pages/AntiMage";
import ArcWarden from "./pages/ArcWarden";
import Axe from "./pages/Axe";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abaddon" element={<Abaddon />} />
          <Route path="/alchemist" element={<Alchemist />} />
          <Route path="/ancient-apparition" element={<AncientApparition />} />
          <Route path="/anti-mage" element={<AntiMage />} />
          <Route path="/arc-warden" element={<ArcWarden />} />
          <Route path="/axe" element={<Axe />} />
        </Routes>
      </div>
    </>
  );
}