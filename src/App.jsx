import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import QuantumRandomDemo from './components/QuantumRandom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">⚛️</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Quantum Randomness Demo</h1>
          </div>
          <p className="text-lg text-gray-600">
            Generate true randomness from quantum measurements!
          </p>
        </header>

        {/* Main Demo */}
        <QuantumRandomDemo />

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-600 text-sm">
          <p>Made with ⚛️ for curious minds | Part of the Quantum Computing Demos series</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
