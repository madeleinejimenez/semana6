import React from 'react';
import './App.css';
import ListPost from './components/ListPost';  // Actualiza la importación para la carpeta 'components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Renderizamos el componente ListPost */}
        <ListPost />
      </header>
    </div>
  );
}

export default App;
