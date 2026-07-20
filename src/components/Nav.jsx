import { useState, useEffect } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { IoLanguage } from 'react-icons/io5';
import logo from '../assets/logo.svg';
import '../styles/nav.css';

export function Nav({ lang, setLang }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: lang === 'en' ? 'How it Works' : lang === 'uz' ? 'Qanday ishlaydi' : 'Как это работает', href: '#how' },
    { label: lang === 'en' ? 'Blockchain' : lang === 'uz' ? 'Blokcheyn' : 'Блокчейн', href: '#blockchain' },
    { label: lang === 'en' ? 'Machine' : lang === 'uz' ? 'Mashina' : 'Машина', href: '#machine' },
    { label: lang === 'en' ? 'Investors' : lang === 'uz' ? 'Investorlar' : 'Инвесторы', href: '#investors' },
    { label: lang === 'en' ? 'Contact' : lang === 'uz' ? 'Aloqa' : 'Контакты', href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'uz', label: 'UZ', flag: '🇺🇿' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="EcoChain" className="nav-logo-img" />
        <span className="nav-logo-text">
          Eco<span className="nav-logo-highlight">Chain</span>
        </span>
      </a>

      <button
        type="button"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ×
        </button>

        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav-link"
            onClick={closeMenu}
          >
            {l.label}
          </a>
        ))}

        <div className="lang-switcher">
          <IoLanguage size={18} aria-hidden="true" />
          {languages.map((l) => (
            <button
              type="button"
              key={l.code}
              onClick={() => {
                setLang(l.code);
                localStorage.setItem('ecochain-lang', l.code);
              }}
              className={`lang-btn ${lang === l.code ? 'active' : ''}`}
            >
              <span className="lang-flag">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>

        <a href="#contact" className="btn-primary nav-cta" onClick={closeMenu}>
          {lang === 'en' ? 'Get in Touch' : lang === 'uz' ? "Bog'lanish" : 'Связаться'}
        </a>
      </div>
    </nav>
  );
}
