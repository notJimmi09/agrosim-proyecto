import React from 'react';
import './Parcelas.css'; // Cargamos sus estilos independientes

const Parcelas = () => {
  // Simulamos los datos reales que se ven en tus tarjetas de parcelas
  const misParcelas = [
    { id: 1, nombre: 'Parcelas Norte', tamaño: '2.5 ha', cultivo: '🍅 Tomate', estado: 'Activa', colorEstado: '#2e7d32', siembra: '14/05/2025' },
    { id: 2, nombre: 'Parcelas Norte', tamaño: '3.2 ha', cultivo: '🍇 Uva', estado: 'Crecimiento', colorEstado: '#fbc02d', siembra: '14/05/2026' },
    { id: 3, nombre: 'Parcelas Norte', tamaño: '1.8 ha', cultivo: '🌽 Maíz', estado: 'Preparación', colorEstado: '#0288d1', siembra: '14/05/2026' },
    { id: 4, nombre: 'Parcelas Norte', tamaño: '2.0 ha', cultivo: '🥬 Lechuga', estado: 'Activa', colorEstado: '#2e7d32', siembra: '14/05/2026' },
    { id: 5, nombre: 'Parcelas Norte', tamaño: '4.0 ha', cultivo: '🍓 Fresa', estado: 'Crecimiento', colorEstado: '#fbc02d', siembra: '14/05/2026' },
    { id: 6, nombre: 'Parcelas Norte', tamaño: '1.2 ha', cultivo: '🌿 Espinaca', estado: 'En pausa', colorEstado: '#757575', siembra: '14/05/2026' },
  ];

  return (
    <div className="parcelas-view-container">
      
      {/* SECCIÓN IZQUIERDA: BUSCADOR, FILTROS Y CUADRÍCULA DE PARCELAS */}
      <div className="parcelas-left-content">
        
        {/* Barra superior de título y botón de agregar */}
        <div className="header-parcelas-top">
          <h2>Selección de parcela</h2>
          <button className="btn-nueva-parcelas">+ Nueva parcela</button>
        </div>

        {/* Zona de filtros */}
        <div className="filters-bar">
          <input type="text" placeholder="Buscar parcela..." className="search-input-box" />
          <select><option>Estado: Todas</option></select>
          <select><option>Cultivo: Todos</option></select>
          <button className="btn-more-filters">Mas Filtros ∨</button>
        </div>

        <h3 className="sub-title-seccion">Mis Parcelas</h3>

        {/* Cuadrícula (Grid) de las tarjetas */}
        <div className="cards-parcelas-grid">
          {misParcelas.map((p) => (
            <div key={p.id} className="parcela-item-card">
              <div className="parcela-card-image-box">
                <span className="landscape-emoji-sim">🖼️</span>
              </div>
              <div className="parcela-card-info">
                <div className="card-info-row">
                  <strong>{p.nombre}</strong>
                  <span>{p.tamaño}</span>
                </div>
                <small className="txt-muted">{p.tamaño}</small>
                <div className="card-cultivo-name">{p.cultivo}</div>
                <div className="card-status-indicator">
                  <span className="dot-indicator" style={{ backgroundColor: p.colorEstado }}></span>
                  {p.estado}
                </div>
                <small className="txt-muted">Siembra: {p.siembra}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación abajo */}
        <div className="pagination-bar">
          <span>Mostrando 1 a 6 de 12 parcelas</span>
          <div className="pagination-numbers">
            <button className="arrow-btn">‹</button>
            <button className="num-btn active">1</button>
            <button className="num-btn">2</button>
            <button className="arrow-btn">›</button>
          </div>
        </div>
      </div>

      {/* SECCIÓN DERECHA: PANEL DETALLADO DE INFORMACIÓN */}
      <aside className="panel-detalle-parcelas">
        <div className="panel-header-close">
          <span><strong>Información de la parcela</strong></span>
          <span className="close-panel-x">X</span>
        </div>

        {/* Mini banner con paisaje */}
        <div className="mini-banner-panel">
          <div className="panel-banner-title">
            <h3>Parcela Norte</h3>
            <span className="badge-activa-panel">Activa</span>
          </div>
        </div>

        {/* Grid de datos técnicos */}
        <div className="panel-datos-tecnicos-grid">
          <div><small>Superficie</small><p>2.5 hectareas</p></div>
          <div><small>Altitud</small><p>1,250 msnm</p></div>
          <div><small>Tipo de suelo</small><p>Franco Arenoso</p></div>
          <div><small>Pendiente</small><p>%2</p></div>
          <div><small>Ubicacion</small><p>Valle verde, sector 3</p></div>
          <div><small>Coordenadas</small><p style={{ fontSize: '0.8rem' }}>19.4321° N, 99.1332° W</p></div>
        </div>

        {/* Sección Cultivo Actual */}
        <div className="panel-cultivo-actual-box">
          <h4>Cultivo actual</h4>
          <div className="panel-cultivo-detail-row">
            <span className="tomato-big-icon">🍅</span>
            <div className="panel-cultivo-labels">
              <h5>Tomate</h5>
              <span className="tag-green-sub">Hortaliza</span>
              <span className="tag-light-sub">Ver cultivo</span>
            </div>
            <div className="panel-cultivo-dates-list">
              <p><small>Ciclo de cultivo:</small> 90 - 100 dias</p>
              <p><small>Fecha de siembra:</small> 14/05/2025</p>
              <p><small>Proxima cosecha:</small> 14/05/2026</p>
            </div>
          </div>
        </div>

        {/* Resumen Rápido e Indicadores */}
        <h4 style={{ margin: '15px 0 10px 0', fontSize: '1rem' }}>Resumen Rapido</h4>
        <div className="panel-kpi-row-grid">
          <div className="kpi-mini-box"><small>Uso de agua</small><strong>68%</strong></div>
          <div className="kpi-mini-box"><small>Rendimiento</small><strong>12.5 ton/ha</strong></div>
          <div className="kpi-mini-box"><small>Tiempo</small><strong>45 días</strong></div>
          <div className="kpi-mini-box"><small>Rentabilidad</small><strong>78%</strong></div>
        </div>

        {/* Botones de acción abajo */}
        <div className="panel-action-buttons-footer">
          <button className="btn-panel-editar">Editar parcela</button>
          <button className="btn-panel-simular">Ver detalles y simular</button>
        </div>
      </aside>

    </div>
  );
};

export default Parcelas;