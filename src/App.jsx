import './App.css'
import "./index.css"
import { useState } from 'react';
import { NavBar } from './components/navbar';
import { MobileMenu } from './components/mobilemenu';
import { Home } from './components/sections/home';
import { About } from './components/sections/about';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <>
  <div className='main fade-in-down'>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
  </div>
    </>
  );
}

export default App
