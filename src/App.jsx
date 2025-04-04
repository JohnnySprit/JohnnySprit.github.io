import './App.css'
import "./index.css"
import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { NavBar } from './components/navbar';
import { MobileMenu } from './components/mobilemenu';
import { Home } from './components/sections/home';
import { About } from './components/sections/about';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div 
      className={`min-h-screen transition-opacity duration-600 
      ${isLoaded ? "opacity-100" : "opacity-0"} 
      bg-black text-gray-100`}
      >
    <div>
    <iframe
    className="video"
    width="1920" height="1080"
    src="https://www.youtube.com/embed/QszMaw-L08o?autoplay=1&loop=1&mute=1&controls=0&playlist=QszMaw-L08o">
    </iframe>
  </div>
  <div className='main'>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
  </div>
      </div>
    </>
  );
}

export default App
