import React from 'react';
import './Cultivos.css'; // Conectamos sus propios estilos

const Cultivos = () => {
  // Datos simulados para el catálogo de tarjetas
  const catalogoCultivos = [
    { id: 1, nombre: 'Tomate', categoria: 'Hortalizas', ciclo: '90 - 120 días', agua: '15 - 20 L/d', rendimiento: '80 - 120 t/ha' },
    { id: 2, nombre: 'Tomate', categoria: 'Hortalizas', ciclo: '90 - 120 días', agua: '15 - 20 L/d', rendimiento: '80 - 120 t/ha' },
    { id: 3, nombre: 'Tomate', categoria: 'Hortalizas', ciclo: '90 - 120 días', agua: '15 - 20 L/d', rendimiento: '80 - 120 t/ha' },
  ];

  return (
    <div className="cultivos-view-container">
      
      {/* SECCIÓN IZQUIERDA: TÍTULO, FILTROS Y CATÁLOGO */}
      <div className="cultivos-left-content">
        
        {/* Barra superior de título y botón de agregar */}
        <div className="header-cultivos-top">
          <div className="title-area">
            <h2>Cultivos</h2>
            <p className="subtitle-txt">Administra los cultivos disponibles en tu sistema</p>
          </div>
          <button className="btn-agregar-cultivo">+ Agregar cultivo</button>
        </div>

        <h3 className="section-subtitle-label">Catálogo de cultivo</h3>

        {/* Filtros de categorías tipo pastilla */}
        <div className="category-pills-bar">
          <button className="pill-btn active">Todos</button>
          <button className="pill-btn">Hortalizas</button>
          <button className="pill-btn">Granos</button>
          <button className="pill-btn">Frutales</button>
          <button className="pill-btn">Otros</button>
        </div>

        {/* Fila de Tarjetas del Catálogo */}
        <div className="cultivos-catalog-row">
          {catalogoCultivos.map((c, index) => (
            <div key={index} className="cultivo-catalog-card">
              <div className="card-image-placeholder">
                {/* Aquí puedes meter una imagen real del cultivo después */}
                <span className="tomato-card-emoji">🍅</span> 
              </div>
              <div className="card-body-content">
                <div className="card-title-row">
                  <h4>{c.nombre}</h4>
                  <span className="badge-category">{c.categoria}</span>
                </div>
                <div className="card-specs-list">
                  <p>📅 {c.ciclo}</p>
                  <p>💧 {c.agua}</p>
                  <p>📈 Rendimiento: {c.rendimiento}</p>
                </div>
                <button className="btn-card-details">Ver detalles</button>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de paginación/carrusel (Puntitos) */}
        <div className="carousel-dots-indicator">
          <span className="dot-item active"></span>
          <span className="dot-item"></span>
          <span className="dot-item"></span>
        </div>
      </div>

      {/* SECCIÓN DERECHA: PANEL DE DETALLE DEL CULTIVO SELECCIONADO */}
      <aside className="panel-detalle-selected-cultivo">
        <span className="panel-context-label">Cultivo seleccionado</span>
        <h3 className="panel-main-title">Tomate</h3>
        <span className="badge-category-panel">Hortalizas</span>

        {/* Imagen destacada en el panel */}
        <div className="panel-hero-image-box">
          <span className="panel-big-tomato-emoji">🍅</span>
        </div>

        {/* Información general */}
        <h4 className="panel-sub-block-title">Información general</h4>
        <div className="panel-general-info-grid">
          <div><small>Nombre del cultivo</small><p>Miguel molinares</p></div>
          <div><small>Tipo de cultivo</small><p>Hortaliza</p></div>
          <div><small>Ciclo del cultivo</small><p>90 - 120 días</p></div>
          <div><small>Temperatura ideal</small><p>18°C - 25°C</p></div>
          <div><small>pH del suelo ideal</small><p>6.0 - 6.8</p></div>
        </div>

        {/* Requerimientos técnicos */}
        <h4 className="panel-sub-block-title">Requerimientos</h4>
        <div className="panel-requirements-row">
          <div className="req-box-item">
            <span className="req-icon">💧</span>
            <strong>15 - 20 L/día</strong>
            <small>Agua</small>
          </div>
          <div className="req-box-item">
            <span className="req-icon">🧪</span>
            <strong>Moderno</strong>
            <small>Fertilizantes</small>
          </div>
          <div className="req-box-item">
            <span className="req-icon">☀️</span>
            <strong>Alto</strong>
            <small>Luz solar</small>
          </div>
        </div>

        {/* Descripción */}
        <h4 className="panel-sub-block-title">Descripción</h4>
        <p className="panel-description-text">
          El tomate es una hortaliza de alto valor comercial. Requiere riesgos constantes y un buen manejo de nutrientes para obtener frutos de calidad.
        </p>

        {/* Botón de acción principal */}
        <button className="btn-panel-select-this-cultivo">
          🌱 Seleccionar este cultivo
        </button>
      </aside>

    </div>
  );
};

export default Cultivos;