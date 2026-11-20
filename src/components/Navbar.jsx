export function Navbar({ seccionActiva, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={() => onNavigate("inicio")} aria-label="Ir al inicio de Campus Hub">
        <span className="brand-mark" aria-hidden="true">CH</span>
        <span><strong>Campus Hub</strong><small>Vida universitaria</small></span>
      </button>
      <nav className="topbar-nav" aria-label="Navegación principal">
        <button className={seccionActiva === "inicio" ? "topbar-link active" : "topbar-link"} type="button" onClick={() => onNavigate("inicio")}>Inicio</button>
        <button className={seccionActiva === "eventos" ? "topbar-link active" : "topbar-link"} type="button" onClick={() => onNavigate("eventos")}>Agenda</button>
      </nav>
      <div className="welcome-user">
        <span className="welcome-avatar" aria-hidden="true">E</span>
        <span><strong>Hola, Estudiante</strong><small>Tu campus te espera</small></span>
      </div>
    </header>
  );
}
