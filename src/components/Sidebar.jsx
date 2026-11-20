const OPCIONES_MENU = [
  { id: "inicio", etiqueta: "Inicio", icono: "⌂" },
  { id: "academico", etiqueta: "Académico", icono: "▤" },
  { id: "deportes", etiqueta: "Deportes", icono: "◉" },
  { id: "eventos", etiqueta: "Eventos", icono: "◇" },
  { id: "espacios", etiqueta: "Espacios universitarios", icono: "▦" },
];

export function Sidebar({ seccionActiva, onNavigate }) {
  return (
    <nav className="sidebar-panel" aria-label="Secciones de Campus Hub">
      <p className="eyebrow">EXPLORA EL CAMPUS</p>
      <div className="sidebar-menu">
        {OPCIONES_MENU.map((opcion) => (
          <button key={opcion.id} type="button" className={seccionActiva === opcion.id ? "sidebar-link active" : "sidebar-link"} onClick={() => onNavigate(opcion.id)}>
            <span className="menu-icon" aria-hidden="true">{opcion.icono}</span>{opcion.etiqueta}
          </button>
        ))}
      </div>
      <div className="sidebar-help"><span aria-hidden="true">i</span><p>Consulta novedades, actividades y recursos de tu comunidad.</p></div>
    </nav>
  );
}
