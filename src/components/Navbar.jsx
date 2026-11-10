export function Navbar({ email, tema, onToggleTheme, onLogout }) {
  return (
    <header className="topbar">
      <a className="brand" href="#" aria-label="TechStore inicio">
        <span className="brand-mark">TS</span>
        <span>TechStore</span>
      </a>

      <div className="topbar-actions">
        <span className="user-email">{email}</span>
        <button className="secondary-button" type="button" onClick={onToggleTheme}>
          {tema === "claro" ? "☾ Modo oscuro" : "☀ Modo claro"}
        </button>
        <button className="logout-button" type="button" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
