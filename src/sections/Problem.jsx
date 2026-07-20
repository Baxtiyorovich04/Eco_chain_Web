import { useFadeIn } from '../hooks/useFadeIn';
import { translations } from '../utils/translations';
import '../styles/problem.css';

export function Problem({ lang }) {
  const ref = useFadeIn();
  const t = translations[lang].problem;

  return (
    <section className="problem">
      <div ref={ref} className="problem-container">
        <div className="tag animate-on-scroll">{t.tag}</div>
        <div className="problem-grid">
          <div>
            <h2 className="section-title animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              {t.title}
            </h2>
            <p className="section-sub animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {t.subtitle}
            </p>
            <div className="problem-stats">
              {[
                { n: '1.8M', l: 'Tons of plastic/year', c: 'red' },
                { n: '6.6%', l: 'Recycling rate', c: 'gold' },
                { n: '15%', l: 'Of all municipal waste', c: 'mint' },
                { n: '147%', l: 'Increase since 2013', c: 'red' },
              ].map((s, i) => (
                <div key={i} className="card animate-on-scroll problem-stat-card" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <div className="problem-stat-number" data-color={s.c}>{s.n}</div>
                  <div className="problem-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="problem-source animate-on-scroll" style={{ animationDelay: '0.7s' }}>
              {t.source}
            </p>
          </div>
          <div className="problem-epr animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="problem-epr-icon">🏙️</div>
            <div className="problem-epr-title">{t.eprTitle}</div>
            <p className="problem-epr-desc">{t.eprDesc}</p>
            {[
              { year: '2026', pct: '50%', active: false },
              { year: '2027', pct: '75%', active: false },
              { year: '2028', pct: '100%', active: true },
            ].map((r, i) => (
              <div
                key={i}
                className={`problem-epr-row animate-on-scroll ${r.active ? 'active' : ''}`}
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <span className="problem-epr-year">{r.year}</span>
                <span className="problem-epr-pct">{r.pct} required</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
