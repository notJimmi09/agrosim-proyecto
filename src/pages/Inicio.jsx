import React from 'react';
import './Inicio.css'; // ¡Así de fácil se conecta!

const Inicio = () => {
  return (
    <div className="inicio-container">
      
      {/* 1. BANNER PRINCIPAL (HERO SECTION) */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>AgroSim</h1>
          <p>Tu gestor de recursos de confianza para agricultores sustentables</p>
        </div>
      </section>

      {/* 2. TÍTULO DE RESUMEN */}
      <h2 className="section-title">Tu resumen del día de hoy</h2>

      {/* 3. CONTENEDOR DE TARJETAS (GRID) */}
      <div className="summary-grid">
        
        {/* Tarjeta 1: Estado de parcelas */}
        <div className="summary-card">
          <h3>Estado de parcelas</h3>
          <div className="parcel-grid">
            <div className="parcel-placeholder-box">
              {/* Aquí simulamos el icono de paisaje que tienes en tu imagen */}
              <div className="landscape-icon">🖼️</div> 
            </div>
            <div className="parcel-placeholder-box">
              <div className="landscape-icon">🖼️</div>
            </div>
          </div>
        </div>

        {/* Tarjeta 2: Últimos reportes */}
        <div className="summary-card">
          <h3>Últimos reportes</h3>
          <div className="report-lines">
            <div className="line-bar" style={{ width: '100%' }}></div>
            <div className="line-bar" style={{ width: '100%' }}></div>
            <div className="line-bar" style={{ width: '85%' }}></div>
            <div className="line-bar" style={{ width: '60%' }}></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Inicio;