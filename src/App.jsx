import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css';

export const App = () => {
  return (
    <div className="mx-auto min-h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-[#161616] to-[#8c8b8b] text-neutral-300 antialiased selection:bg-green-100 selection:text-cyan-900">
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
