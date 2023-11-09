import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Inicio } from './pages/Inicio';
import { Apartamentos } from './pages/Apartamentos';
import { Memoria } from './pages/Memoria';
import { Infografias } from './pages/Infografias';
import { Localizacion } from './pages/Localizacion';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="" element={<Inicio />} />
        <Route path="/apartamentos" element={<Apartamentos />} />
        <Route path="/memoria-de-calidades" element={<Memoria />} />
        <Route path="/infografias" element={<Infografias />} />
        <Route path="/localizacion" element={<Localizacion />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
