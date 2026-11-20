const EVENTOS_DEPORTIVOS = [
  { id: 1, nombre: "Torneo relámpago de fútbol", fecha: "24 de noviembre · 16:00 h", categoria: "Fútbol", descripcion: "Forma tu equipo y compite en las canchas centrales.", icono: "⚽" },
  { id: 2, nombre: "Clase abierta de yoga", fecha: "26 de noviembre · 08:00 h", categoria: "Bienestar", descripcion: "Una pausa activa al aire libre para toda la comunidad.", icono: "☀" },
  { id: 3, nombre: "Final de baloncesto universitario", fecha: "29 de noviembre · 18:30 h", categoria: "Baloncesto", descripcion: "Apoya a los Halcones en el gimnasio principal.", icono: "◉" },
];

const AVISOS_ACADEMICOS = [
  ["Inscripción de materias", "El periodo de altas y bajas estará disponible del 25 al 29 de noviembre."],
  ["Biblioteca digital", "Ya puedes consultar las nuevas colecciones y reservar salas de estudio."],
  ["Tutorías disponibles", "Agenda acompañamiento académico con tu coordinación antes del viernes."],
];

const ACTIVIDADES = [
  ["Club de debate", "Miércoles · 14:00 h", "Comunicación"],
  ["Taller de fotografía", "Jueves · 16:00 h", "Cultura"],
  ["Voluntariado universitario", "Sábado · 09:00 h", "Comunidad"],
];

const ESPACIOS = [
  ["Canchas centrales", "Disponibles de 07:00 a 21:00 h", "2 canchas disponibles"],
  ["Gimnasio universitario", "Disponible de 06:00 a 20:00 h", "Aforo moderado"],
  ["Pista de atletismo", "Disponible de 06:00 a 19:00 h", "Acceso libre"],
];

const TITULOS_SECCION = {
  academico: ["Académico", "Organiza tu semestre y mantente al día con los avisos importantes."],
  deportes: ["Deportes", "Encuentra actividades para moverte, competir y convivir."],
  eventos: ["Eventos", "No te pierdas las experiencias que conectan a la comunidad universitaria."],
  espacios: ["Espacios universitarios", "Conoce los espacios deportivos que puedes disfrutar en el campus."],
};

function EventCard({ evento }) {
  return (
    <article className="event-card h-100">
      <div className="event-card-top"><span className="event-icon" aria-hidden="true">{evento.icono}</span><span className="category-pill">{evento.categoria}</span></div>
      <p className="event-date">{evento.fecha}</p>
      <h3>{evento.nombre}</h3>
      <p>{evento.descripcion}</p>
      <button type="button" className="text-button">Ver detalles <span aria-hidden="true">→</span></button>
    </article>
  );
}

function EventsGrid() {
  return <div className="row g-3">{EVENTOS_DEPORTIVOS.map((evento) => <div className="col-12 col-md-6 col-xl-4" key={evento.id}><EventCard evento={evento} /></div>)}</div>;
}

function AcademicNotices() {
  return <div className="notice-list">{AVISOS_ACADEMICOS.map(([titulo, texto]) => <article className="notice-item" key={titulo}><span className="notice-dot" aria-hidden="true" /><div><h3>{titulo}</h3><p>{texto}</p></div></article>)}</div>;
}

function ActivityList() {
  return <div className="activity-list">{ACTIVIDADES.map(([nombre, horario, tipo]) => <article className="activity-item" key={nombre}><span className="activity-symbol" aria-hidden="true">✦</span><div><h3>{nombre}</h3><p>{horario}</p></div><span className="activity-type">{tipo}</span></article>)}</div>;
}

function SpacesList() {
  return <div className="spaces-list">{ESPACIOS.map(([nombre, horario, estado]) => <article className="space-item" key={nombre}><span className="space-icon" aria-hidden="true">▦</span><div><h3>{nombre}</h3><p>{horario}</p></div><span className="space-status"><i />{estado}</span></article>)}</div>;
}

function SectionHeader({ titulo, descripcion }) {
  return <header className="page-heading"><p className="eyebrow">CAMPUS HUB</p><h1>{titulo}</h1><p>{descripcion}</p></header>;
}

export function MainContent({ seccionActiva, onNavigate }) {
  if (seccionActiva !== "inicio") {
    const [titulo, descripcion] = TITULOS_SECCION[seccionActiva];
    const contenido = { academico: <AcademicNotices />, deportes: <EventsGrid />, eventos: <EventsGrid />, espacios: <SpacesList /> }[seccionActiva];
    return <section className="content-panel"><SectionHeader titulo={titulo} descripcion={descripcion} />{contenido}</section>;
  }

  return (
    <section className="main-dashboard">
      <div className="welcome-banner">
        <div><p className="eyebrow">TU ESPACIO UNIVERSITARIO</p><h1>¡Bienvenido de nuevo!</h1><p>Descubre lo que sucede hoy en Campus Hub y aprovecha cada momento de tu vida universitaria.</p></div>
        <button type="button" className="primary-button" onClick={() => onNavigate("eventos")}>Ver agenda completa <span aria-hidden="true">→</span></button>
      </div>
      <section className="dashboard-section">
        <div className="section-heading"><div><p className="eyebrow">MUÉVETE EN EL CAMPUS</p><h2>Próximos eventos deportivos</h2></div><button type="button" className="section-link" onClick={() => onNavigate("deportes")}>Ver todos</button></div>
        <EventsGrid />
      </section>
      <div className="row g-4 bottom-grid">
        <section className="col-12 col-xl-6"><div className="info-card h-100"><div className="section-heading"><div><p className="eyebrow">MANTENTE AL DÍA</p><h2>Avisos académicos</h2></div><button type="button" className="section-link" onClick={() => onNavigate("academico")}>Ver más</button></div><AcademicNotices /></div></section>
        <section className="col-12 col-xl-6"><div className="info-card h-100"><div className="section-heading"><div><p className="eyebrow">CONÉCTATE</p><h2>Actividades universitarias</h2></div></div><ActivityList /></div></section>
      </div>
      <section className="spaces-highlight"><div><p className="eyebrow">ESPACIOS PARA TI</p><h2>Entrena y disfruta el campus</h2><p>Consulta la disponibilidad de canchas, gimnasio y pista antes de tu próxima actividad.</p><button type="button" className="primary-button" onClick={() => onNavigate("espacios")}>Explorar espacios</button></div><div className="spaces-illustration" aria-hidden="true"><span>⌁</span><span>◯</span><span>⌁</span></div></section>
    </section>
  );
}
