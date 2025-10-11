import { useState } from 'react'


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl p-8 rounded-xl shadow-md bg-white">
        <h1 className="text-3xl mb-4">¡Hola, Ruta Ride!</h1>
        <p className="mb-4">TailwindCSS v4 está funcionando correctamente 🎉</p>
        <button className="btn-primary">Primary</button>
        <button className="ml-3 btn-accent">Accent</button>
      </div>
    </div>
  );
}