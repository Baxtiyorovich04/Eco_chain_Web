import logo from '../assets/logo.svg';
import '../styles/footer.css';

export function Footer({ lang }) {
  const links = [
    { label: lang === 'en' ? 'How it Works' : lang === 'uz' ? 'Qanday ishlaydi' : 'Как это работает', href: '#how' },
    { label: lang === 'en' ? 'Blockchain' : lang === 'uz' ? 'Blokcheyn' : 'Блокчейн', href: '#blockchain' },
    { label: lang === 'en' ? 'Machine' : lang === 'uz' ? 'Mashina' : 'Машина', href: '#machine' },
    { label: lang === 'en' ? 'Investors' : lang === 'uz' ? 'Investorlar' : 'Инвесторы', href: '#investors' },
    { label: lang === 'en' ? 'Contact' : lang === 'uz' ? 'Aloqa' : 'Контакты', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="EcoChain" className="footer-logo-img" />
        <span className="footer-brand-text">
          Eco<span className="footer-brand-highlight">Chain</span>
        </span>
        <span className="footer-copyright">© 2025 · Tashkent, Uzbekistan</span>
      </div>
      <div className="footer-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="footer-link">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
