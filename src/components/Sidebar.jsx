import React from 'react';
// Importamos tus imágenes usando los nombres exactos de tu carpeta assets
import iconInicio from '../assets/inicio.png';
import iconParcelas from '../assets/parcelas.png';
import iconCultivo from '../assets/cultivo.png';
import iconSimulacion from '../assets/simulacion.png';
import iconReporte from '../assets/reporte.png';
import iconInventario from '../assets/inventario.png';
import iconAjustes from '../assets/ajustes.png';

// 1. Recibimos las propiedades que le mandó App.jsx
const Sidebar = ({ activeTab, setActiveTab }) => {
  
  const menuItems = [
    { name: 'Inicio', icon: iconInicio },
    { name: 'Parcelas', icon: iconParcelas },
    { name: 'Cultivos', icon: iconCultivo },
    { name: 'Simulación', icon: iconSimulacion },
    { name: 'Reportes', icon: iconReporte },
    { name: 'Inventario', icon: iconInventario },
    { name: 'Configuración', icon: iconAjustes },
  ];

  return (
    <aside className="sidebar">
      {/* ... tu contenedor de logo ... */}
      <nav>
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            /* Se pone brillante si coincide con la pestaña activa */
            className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
            /* Al hacer clic, le cambia el estado a App.jsx instantáneamente */
            onClick={() => setActiveTab(item.name)}
          >
            <img src={item.icon} alt={item.name} className="nav-icon" />
            {item.name}
          </div>
        ))}
      </nav>
      {/* ... tu tarjeta de clima ... */}
    </aside>
  );
};

export default Sidebar;