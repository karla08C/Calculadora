import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa o componente App
import './index.css'; // Importa os estilos CSS globais

// Cria a raiz da sua aplicação React e a renderiza no elemento com id="root" no index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente principal da calculadora */}
  </React.StrictMode>,
);
