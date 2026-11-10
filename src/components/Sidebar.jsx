const CATEGORIAS = ["Todos", "Accesorios", "Energía", "Periféricos"];

export function Sidebar({ categoria, setCategoria, totalProductos }) {
  return (
    <section className="sidebar-panel">
      <p className="eyebrow">PANEL DE CONTROL</p>
      <h2>Filtrar productos</h2>
      <label htmlFor="category-filter">Categoría</label>
      <select
        id="category-filter"
        className="form-select"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        {CATEGORIAS.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <div className="sidebar-summary">
        <span className="summary-dot" />
        <span>{totalProductos} productos en catálogo</span>
      </div>
      <p className="sidebar-hint">
        Selecciona una categoría para actualizar los resultados en tiempo real.
      </p>
    </section>
  );
}
