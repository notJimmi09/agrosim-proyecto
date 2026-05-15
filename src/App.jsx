import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        {/* Aquí es donde irá el resto de tu app después */}
        <h1 style={{ color: '#1a4d2e' }}>Bienvenido a AgroSim</h1>
        <p>Agrosim proyecto</p>
      </main>
    </div>
  )
}

export default App