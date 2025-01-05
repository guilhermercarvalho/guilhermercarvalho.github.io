import React from 'react';
import { Navigation } from './pages/Navigation';
import { Home } from './pages/Home';
import { Role } from './pages/Roles';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { About } from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Home />
      <About />
      <Role />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
