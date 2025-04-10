import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
      stroke="#4ADE80"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M20 8L32 14V26L20 32L8 26V14L20 8Z"
      fill="#4ADE80"
      fillOpacity="0.2"
    />
    <circle cx="20" cy="20" r="4" fill="#4ADE80" />
  </svg>
);

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition-colors"
  >
    {children}
  </a>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 