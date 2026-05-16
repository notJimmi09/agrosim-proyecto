import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'

// 1. Importamos tus páginas limpias desde la carpeta pages (o views)
import Inicio from './pages/Inicio' // Si tu carpeta se llama 'views', cambia 'pages' por 'views'
import Parcelas from './pages/Parcelas'
import Cultivos from './pages/Cultivos'

function App() {
  // El estado que controla qué pestaña está activa
  const [vistaActual, setVistaActual] = useState('Inicio');

  return (
    <div className="app-container">
      {/* Conservamos tu Sidebar intacto pasándole el control de las pestañas */}
      <Sidebar activeTab={vistaActual} setActiveTab={setVistaActual} />
      
      {/* Contenedor principal de las pantallas */}
      <main className="main-content">
        
        {/* ==========================================
            AQUÍ CONTROLAMOS QUÉ PÁGINA SE MUESTRA
           ========================================== */}
        
        {vistaActual === 'Inicio' && <Inicio />}

        {vistaActual === 'Parcelas' && <Parcelas />}

        {/* Temporales para que no marquen error si das clic en los otros botones */}
        {vistaActual === 'Cultivos' && <Cultivos />}
        
        {vistaActual === 'Simulación' && (
          <div className="placeholder-view"><h2>Simulación (Próximamente)</h2></div>
        )}

      </main>
    </div>
  )
}

export default App