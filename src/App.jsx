import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  return (
    <div className="app-shell">
      <Navbar seccionActiva={seccionActiva} onNavigate={setSeccionActiva} />
      <div className="container-fluid campus-layout">
        <div className="row g-4">
          <aside className="col-12 col-lg-3 col-xl-2">
            <Sidebar seccionActiva={seccionActiva} onNavigate={setSeccionActiva} />
          </aside>
          <main className="col-12 col-lg-9 col-xl-10">
            <MainContent seccionActiva={seccionActiva} onNavigate={setSeccionActiva} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
