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
import './index.css';

function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('ecochain-lang');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('ecochain-lang', lang);
  }, [lang]);

  useEffect(() => {
    injectSEOMeta();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);

  return (
    <>
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
    </>
  );
}

export default App;
