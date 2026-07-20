import { useFadeIn } from '../hooks/useFadeIn';
import { RiRobotFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { HiPhone, HiLocationMarker, HiShieldCheck, HiCube } from 'react-icons/hi';
import { translations } from '../utils/translations';
import '../styles/machine.css';

export function Machine({ lang }) {
  const ref = useFadeIn();
  const t = translations[lang].machine;

  const features = [
    { icon: RiRobotFill, title: t.features[0].title, desc: t.features[0].desc, color: 'mint-light' },
    { icon: MdDelete, title: t.features[1].title, desc: t.features[1].desc, color: 'gray' },
    { icon: HiPhone, title: t.features[2].title, desc: t.features[2].desc, color: 'mint' },
    { icon: HiLocationMarker, title: t.features[3].title, desc: t.features[3].desc, color: 'gold' },
    { icon: HiShieldCheck, title: t.features[4].title, desc: t.features[4].desc, color: 'gray' },
    { icon: HiCube, title: t.features[5].title, desc: t.features[5].desc, color: 'mint' },
  ];

  return (
    <section id="machine" className="machine">
      <div ref={ref} className="machine-container">
        <div className="machine-header">
          <div className="tag animate-on-scroll">{t.tag}</div>
          <h2 className="section-title animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            {t.title}
            <br />
            {t.titleHighlight}
          </h2>
          <p className="section-sub animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
        </div>

        <div className="machine-visual animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <div className="machine-device">
            <div className="machine-logo">EcoChain</div>
            <div className="machine-camera">🔍</div>
            <div className="machine-screen">📱</div>
            <div className="machine-base" />
            <div className="machine-node-icon">
              <svg width="36" height="36" viewBox="0 0 32 32" opacity="0.5">
                <circle cx="16" cy="8" r="3.5" fill="var(--mint)" />
                <circle cx="6" cy="24" r="2.5" fill="var(--mint)" />
                <circle cx="26" cy="24" r="2.5" fill="var(--mint)" />
                <line x1="16" y1="8" x2="6" y2="24" stroke="var(--mint)" strokeWidth="1.5" />
                <line x1="16" y1="8" x2="26" y2="24" stroke="var(--mint)" strokeWidth="1.5" />
                <line x1="6" y1="24" x2="26" y2="24" stroke="var(--mint)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="machine-glow" />
        </div>

        <div className="machine-features">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="card animate-on-scroll machine-feature"
                style={{ animationDelay: `${0.4 + i * 0.08}s` }}
              >
                <div className="machine-feature-icon" data-color={f.color}>
                  <Icon size={32} />
                </div>
                <h3 className="machine-feature-title">{f.title}</h3>
                <p className="machine-feature-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
