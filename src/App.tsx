import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './pages/Header';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { initGA, trackPageView } from './lib/analytics';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    initGA();

    const handleRoute = () => {
      const page = window.location.pathname + window.location.hash;
      trackPageView(page);
    };

    // Rastreia a rota inicial
    handleRoute();

    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
