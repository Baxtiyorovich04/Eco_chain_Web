import { useFadeIn } from '../hooks/useFadeIn';
import { MdDelete } from 'react-icons/md';
import { RiRecycleFill } from 'react-icons/ri';
import { IoCamera, IoQrCode } from 'react-icons/io5';
import { HiCube, HiCash } from 'react-icons/hi';
import { translations } from '../utils/translations';
import '../styles/howItWorks.css';

export function HowItWorks({ lang }) {
  const ref = useFadeIn();
  const t = translations[lang].howItWorks;

  const steps = [
    { icon: MdDelete, step: '01', title: t.steps[0].title, desc: t.steps[0].desc, color: 'gray' },
    { icon: RiRecycleFill, step: '02', title: t.steps[1].title, desc: t.steps[1].desc, color: 'mint' },
    { icon: IoCamera, step: '03', title: t.steps[2].title, desc: t.steps[2].desc, color: 'mint-light' },
    { icon: HiCube, step: '04', title: t.steps[3].title, desc: t.steps[3].desc, color: 'gold' },
    { icon: IoQrCode, step: '05', title: t.steps[4].title, desc: t.steps[4].desc, color: 'mint' },
    { icon: HiCash, step: '06', title: t.steps[5].title, desc: t.steps[5].desc, color: 'mint-light' },
  ];

  return (
    <section id="how" className="how-it-works">
      <div ref={ref} className="how-it-works-container">
        <div className="how-it-works-header">
          <div className="tag animate-on-scroll">{t.tag}</div>
          <h2 className="section-title animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            {t.title}
          </h2>
          <p className="section-sub animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="card animate-on-scroll how-it-works-card"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="how-it-works-step-number">{s.step}</div>
                <div className="how-it-works-icon" data-color={s.color}>
                  <Icon size={40} />
                </div>
                <h3 className="how-it-works-title">{s.title}</h3>
                <p className="how-it-works-desc">{s.desc}</p>
                {i < steps.length - 1 && <div className="how-it-works-arrow" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
