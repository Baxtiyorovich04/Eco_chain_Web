import { useState, useEffect, useRef } from 'react';
import { NodeNetwork } from '../components/NodeNetwork';
import { HiArrowRight, HiChartBar } from 'react-icons/hi';
import { translations } from '../utils/translations';
import '../styles/hero.css';

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Hero({ lang }) {
  const t = translations[lang].hero;

  return (
    <section id="top" className="hero">
      <NodeNetwork />
      <div className="hero-gradient" />

      <div className="hero-content">


        <h1 className="hero-title">
          {t.title}
          <br />
          <span className="hero-title-highlight">{t.titleHighlight}</span>
        </h1>

        <p className="hero-subtitle">{t.subtitle}</p>

        <div className="hero-buttons">
          <a href="#how" className="btn-primary">
            {t.seeHow}
            <HiArrowRight size={18} />
          </a>
          <a href="#investors" className="btn-outline">
            <HiChartBar size={18} />
            {t.forInvestors}
          </a>
        </div>

        <div className="hero-stats">
          {[
            { val: 18, suffix: 'M', prefix: '', label: t.stat1Label, note: t.stat1Note },
            { val: 6, suffix: '.6%', prefix: '', label: t.stat2Label, note: t.stat2Note },
            { val: 864, suffix: 'M', prefix: '$', label: t.stat3Label, note: t.stat3Note },
          ].map((s, i) => (
            <div key={i} className="hero-stat">
              <div className="hero-stat-number" data-color={i === 0 ? 'mint' : i === 1 ? 'gold' : 'mint'}>
                <AnimatedCounter target={s.val} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="hero-stat-label">{s.label}</div>
              <div className="hero-stat-note">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
