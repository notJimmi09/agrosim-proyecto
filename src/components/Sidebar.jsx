import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Inicio', icon: '🏠' },
    { name: 'Parcelas', icon: '📂' },
    { name: 'Cultivos', icon: '🌿', active: true },
    { name: 'Simulación', icon: '📈' },
    { name: 'Reportes', icon: '📋' },
    { name: 'Inventario', icon: '📦' },
    { name: 'Configuración', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>AgroSim</h2>
        <span>Gestión inteligente</span>
      </div>
      
      <nav>
        {menuItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span>{item.icon}</span>
            {item.name}
          </div>
        ))}
      </nav>

      <div className="weather-card">
        <p>Clima actual</p>
        <h3>24°C</h3>
        <span>Parcialmente nublado</span>
      </div>
    </aside>
  );
};

export default Sidebar;