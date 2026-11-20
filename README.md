# Campus Hub

Vista inicial de un portal universitario construido con React, Vite y Bootstrap. Centraliza información académica, deportiva y de vida universitaria con datos locales de demostración.

## Requisitos

- Node.js 20 o superior
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la URL local para abrir la aplicación.

## Compilar para producción

```bash
npm run build
```

## Qué funciona actualmente

- Página de inicio con bienvenida al estudiante.
- Menú lateral para Inicio, Académico, Deportes, Eventos y Espacios universitarios.
- Navegación simple entre secciones sin backend ni rutas complejas.
- Tres eventos deportivos de demostración con fecha, categoría y descripción.
- Avisos académicos, actividades universitarias y disponibilidad de canchas, gimnasio y pista.
- Diseño responsivo para celular y computadora, con Bootstrap para la cuadrícula y estilos propios de Campus Hub.

## Variables de entorno

La preview funciona completamente con datos locales y no requiere variables de entorno. Si en el futuro se conecta `src/services/api.js` a un backend GraphQL, copia `.env.example` como `.env` y configura `VITE_API_URL`. No se incluyen credenciales ni claves en el repositorio.

## Pendiente de desarrollar

- Autenticación real y perfiles de usuario.
- Integración con servicios académicos, calendario y reservas de espacios.
- Persistencia de inscripciones, avisos y disponibilidad en una base de datos.
- Rutas completas y páginas de detalle para cada evento.

## Estructura principal

```text
src/
  components/
    Footer.jsx
    MainContent.jsx
    Navbar.jsx
    Sidebar.jsx
  services/
    api.js
  App.jsx
  App.css
  index.css
```
