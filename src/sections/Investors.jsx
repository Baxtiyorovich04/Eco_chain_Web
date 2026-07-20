import { useFadeIn } from '../hooks/useFadeIn';
import { FaUniversity } from 'react-icons/fa';
import { HiShieldCheck, HiCheckCircle, HiTrendingUp, HiDocumentText } from 'react-icons/hi';
import { translations } from '../utils/translations';
import '../styles/investors.css';

export function Investors({ lang }) {
  const ref = useFadeIn();
  const t = translations[lang].investors;

  const rows = [
    ['', 'Year 1', 'Year 2', 'Year 3'],
    ['Machines deployed', '20', '80', '200'],
    ['Bottles/day per machine', '300', '400', '500'],
    ['🏆 NFT Certificates (MAIN)', '$150K', '$700K', '$2M'],
    ['PET Plastic Sales', '$50K', '$200K', '$700K'],
    ['In-App Advertising', '$20K', '$100K', '$300K'],
    ['TOTAL REVENUE', '$220K', '$1M', '$3M'],
  ];

  const icons = [FaUniversity, HiShieldCheck, HiCheckCircle, HiTrendingUp];
  const colors = ['mint', 'gold', 'mint-light', 'mint'];

  return (
    <section id="investors" className="investors">
      <div ref={ref} className="investors-container">
        <div className="tag animate-on-scroll">{t.tag}</div>
        <div className="investors-grid">
          <div>
            <h2 className="section-title animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              {t.title}
            </h2>
            <p className="investors-subtitle animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {t.subtitle}
            </p>
            {t.reasons.map((p, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="investors-reason animate-on-scroll"
                  data-color={colors[i]}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <Icon size={28} className="investors-reason-icon" />
                  <div>
                    <div className="investors-reason-title">{p.title}</div>
                    <div className="investors-reason-desc">{p.desc}</div>
                  </div>
                </div>
              );
            })}
            <a
              href="#contact"
              className="btn-primary animate-on-scroll"
              style={{ animationDelay: '0.7s' }}
            >
              <HiDocumentText size={18} />
              {t.requestDeck}
            </a>
          </div>

          <div>
            <div className="investors-table-wrapper animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <table className="investors-table">
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri} className={ri === 0 ? 'header' : ri === rows.length - 1 ? 'total' : ''}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={ci === 0 ? 'label' : ''}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="investors-table-note animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              {t.tableNote}
            </p>

            <div className="investors-competitive animate-on-scroll" style={{ animationDelay: '0.6s' }}>
              <div className="investors-competitive-title">{t.competitiveTitle}</div>
              {[
                ['AI Quality Sorting', false, false, true],
                ['Blockchain Certificates', false, false, true],
                ['NAPP Stablecoin Reward', false, false, true],
                ['EPR Compliance Tool', false, false, true],
              ].map((row, i) => (
                <div key={i} className="investors-competitive-row">
                  <span className="investors-competitive-label">{row[0]}</span>
                  <span className="investors-competitive-cell">
                    {row[1] ? <HiCheckCircle size={18} /> : '❌'}
                  </span>
                  <span className="investors-competitive-cell">
                    {row[2] ? <HiCheckCircle size={18} /> : '❌'}
                  </span>
                  <span className="investors-competitive-cell highlight">
                    {row[3] ? <HiCheckCircle size={20} /> : '❌'}
                  </span>
                </div>
              ))}
              <div className="investors-competitive-legend">
                <span />
                <span>Bins</span>
                <span>Manual</span>
                <span className="highlight">EcoChain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
