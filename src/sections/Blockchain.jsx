import { useFadeIn } from '../hooks/useFadeIn';
import { HiShieldCheck, HiGlobe, HiCheckCircle, HiTrendingUp } from 'react-icons/hi';
import { FaUniversity, FaIndustry } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { RiRecycleFill } from 'react-icons/ri';
import { HiCube } from 'react-icons/hi';
import { IoWallet } from 'react-icons/io5';
import { translations } from '../utils/translations';
import '../styles/blockchain.css';

export function Blockchain({ lang }) {
  const ref = useFadeIn();
  const t = translations[lang].blockchain;

  const icons = [HiShieldCheck, HiGlobe, FaUniversity, HiTrendingUp];
  const flowIcons = [RiRecycleFill, HiCube, MdVerified, FaIndustry, FaUniversity];

  return (
    <section id="blockchain" className="blockchain">
      <div ref={ref} className="blockchain-container">
        <div className="tag animate-on-scroll">{t.tag}</div>
        <div className="blockchain-grid">
          <div>
            <h2 className="section-title animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              {t.nftTitle}
              <br />
              <span className="blockchain-revenue">{t.nftRevenue}</span>
            </h2>
            <p className="blockchain-desc animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              {t.nftDesc}
            </p>
            <div className="blockchain-features">
              {t.features.map((f, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={i}
                    className="blockchain-feature animate-on-scroll"
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <Icon size={24} className="blockchain-feature-icon" />
                    <div>
                      <div className="blockchain-feature-title">{f.title}</div>
                      <div className="blockchain-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="blockchain-stablecoin animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="blockchain-stablecoin-header">
                <div className="blockchain-stablecoin-icon">
                  <IoWallet size={28} />
                </div>
                <div>
                  <div className="blockchain-stablecoin-title">{t.stablecoinTitle}</div>
                  <div className="blockchain-stablecoin-subtitle">{t.stablecoinSubtitle}</div>
                </div>
              </div>
              {t.stablecoinPoints.map((pt, i) => (
                <div key={i} className="blockchain-stablecoin-point">
                  <HiCheckCircle size={20} className="blockchain-stablecoin-check" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="blockchain-flow animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              <div className="blockchain-flow-header">
                <MdVerified size={18} />
                {t.nftFlowTitle}
              </div>
              {t.nftFlowSteps.map((label, i) => {
                const Icon = flowIcons[i];
                const highlight = i === 2;
                return (
                  <div key={i} className="blockchain-flow-step">
                    <div className={`blockchain-flow-icon ${highlight ? 'highlight' : ''}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`blockchain-flow-label ${highlight ? 'highlight' : ''}`}>{label}</span>
                    {i < 4 && <div className="blockchain-flow-connector" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
