import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { HowItWorks } from './sections/HowItWorks';
import { Blockchain } from './sections/Blockchain';
import { Machine } from './sections/Machine';
import { Investors } from './sections/Investors';
import { Contact } from './sections/Contact';
import { injectSEOMeta } from './utils/seo';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('ecochain-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('ecochain-lang', lang);
  }, [lang]);

  useEffect(() => {
    injectSEOMeta();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Problem lang={lang} />
        <HowItWorks lang={lang} />
        <Blockchain lang={lang} />
        <Machine lang={lang} />
        <Investors lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
