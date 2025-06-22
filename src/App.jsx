import { useState } from 'react';
import './App.css'
import { Navbar } from './components/Navbar';
import './index.css'
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Projects';
import { Contact } from './components/section/Contact';
import Techno from './components/section/Techno';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen transition-opacity duration-700 opacity-100 bg-black text-gray-100">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Techno />
        <Contact />
      </div>
    </>
  )
}

export default App
