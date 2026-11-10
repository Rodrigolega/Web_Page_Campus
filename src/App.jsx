import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import "./App.css";

const PRODUCTOS = [
  { id: 1, nombre: "Cable HDMI 4K 2m", categoria: "Accesorios", precio: 150 },
  { id: 2, nombre: "Multicontacto USB", categoria: "Energía", precio: 350 },
  { id: 3, nombre: "Adaptador USB-C", categoria: "Accesorios", precio: 220 },
  { id: 4, nombre: "Teclado RGB", categoria: "Periféricos", precio: 890 },
  { id: 5, nombre: "Mouse inalámbrico", categoria: "Periféricos", precio: 420 },
  { id: 6, nombre: "Cargador USB-C 65W", categoria: "Energía", precio: 590 },
];
 
function App() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [tema, setTema] = useState(() => localStorage.getItem("tema") || "claro");

  // useEffect 1: simula una petición asíncrona al iniciar sesión.
  useEffect(() => {
    if (!token) {
      setProductos([]);
      setCargando(false);
      return undefined;
    }

    setCargando(true);
    const temporizador = setTimeout(() => {
      setProductos(PRODUCTOS);
      setCargando(false);
    }, 1600);

    // Limpieza: evita actualizar el estado si el efecto se cancela.
    return () => clearTimeout(temporizador);
  }, [token]);

  // useEffect 2: guarda el tema elegido y lo aplica a toda la interfaz.
  useEffect(() => {
    localStorage.setItem("tema", tema);
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoria === "Todos" || producto.categoria === categoria;
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  const handleLoginSuccess = (nuevoToken, nuevoEmail) => {
    setToken(nuevoToken);
    setEmail(nuevoEmail);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail("");
    setCategoria("Todos");
    setBusqueda("");
  };

  if (!token) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app-shell">
      <Navbar
        email={email}
        tema={tema}
        onToggleTheme={() => setTema((actual) => actual === "claro" ? "oscuro" : "claro")}
        onLogout={handleLogout}
      />

      <div className="container-fluid dashboard-container">
        <div className="row g-4">
          <aside className="col-12 col-md-4 col-lg-3">
            <Sidebar
              categoria={categoria}
              setCategoria={setCategoria}
              totalProductos={productos.length}
            />
          </aside>

          <main className="col-12 col-md-8 col-lg-9">
            {cargando ? (
              <section className="loading-panel" aria-live="polite">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <h2>Cargando productos...</h2>
                <p>Estamos preparando el catálogo de TechStore.</p>
              </section>
            ) : (
              <MainContent
                productos={productosFiltrados}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
              />
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
