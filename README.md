# TechStore — Dashboard Reactivo

Dashboard académico desarrollado con React y Vite para practicar componentes reutilizables, `useState`, `useEffect` y Bootstrap Grid.

## Requisitos
- Node.js
- npm

## Instalación
```bash
npm install
npm run dev
```

## Compilar para producción
```bash
npm run build
```

## Funcionalidades
- Inicio de sesión de demostración con token guardado en `localStorage`.
- Catálogo de productos.
- Búsqueda reactiva por nombre.
- Filtro reactivo por categoría.
- Carga simulada de productos (1.6 segundos) con spinner de Bootstrap.
- Cambio de tema claro/oscuro con persistencia en `localStorage`.
- Cierre de sesión.

## Estructura principal
```text
src/
  components/
    Footer.jsx
    Login.jsx
    MainContent.jsx
    Navbar.jsx
    Sidebar.jsx
  services/
    api.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Nota académica
El token de acceso es ficticio y únicamente demuestra el flujo de interfaz. No representa autenticación segura ni sustituye un backend.

## Evidencias sugeridas para el reporte
1. Árbol de `src/components` para demostrar estructura modular.
2. `App.jsx` mostrando los dos `useEffect` y estados.
3. Dashboard cargando con el spinner visible.
4. Catálogo completo con tarjetas.
5. Búsqueda y filtro por categoría en funcionamiento.
6. Cambio de tema claro/oscuro y persistencia después de recargar.
7. Login y cierre de sesión.
