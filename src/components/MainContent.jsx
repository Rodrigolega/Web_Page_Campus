export function MainContent({ productos, busqueda, setBusqueda }) {
  return (
    <section className="catalog-panel">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow">CATÁLOGO</p>
          <h1>Catálogo de productos</h1>
          <p className="muted-text">Encuentra lo que necesitas para tu espacio de trabajo.</p>
        </div>
        <span className="result-count">{productos.length} resultados</span>
      </div>

      <div className="search-wrap">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          type="search"
          className="form-control search-input"
          placeholder="Buscar por nombre de producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar productos"
        />
        {busqueda && (
          <button className="clear-search" type="button" onClick={() => setBusqueda("")}>
            Limpiar
          </button>
        )}
      </div>

      {productos.length > 0 ? (
        <div className="row g-3 product-grid">
          {productos.map((producto) => (
            <div className="col-12 col-sm-6 col-xl-4" key={producto.id}>
              <article className="product-card h-100">
                <span className="category-pill">{producto.categoria}</span>
                <div className="product-symbol" aria-hidden="true">▦</div>
                <h2>{producto.nombre}</h2>
                <p className="muted-text">Producto disponible.</p>
                <div className="product-bottom">
                  <span className="price">${producto.precio.toLocaleString("es-MX")} MXN</span>
                  <span className="availability"><span /> Disponible</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>
          <h2>No encontramos productos</h2>
          <p>Prueba con otro nombre o cambia la categoría seleccionada.</p>
          <button className="secondary-button" type="button" onClick={() => setBusqueda("")}>
            Limpiar búsqueda
          </button>
        </div>
      )}
    </section>
  );
}
