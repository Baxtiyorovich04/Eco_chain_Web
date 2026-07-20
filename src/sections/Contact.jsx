import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import { HiMail, HiLightningBolt, HiExternalLink } from 'react-icons/hi';
import { IoCheckmarkDone, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import { translations } from '../utils/translations';
import '../styles/contact.css';

export function Contact({ lang }) {
  const ref = useFadeIn();
  const t = translations[lang].contact;
  const [form, setForm] = useState({ name: '', email: '', type: 'investor', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div ref={ref} className="contact-container">
        <div className="tag animate-on-scroll">{t.tag}</div>
        <h2 className="section-title animate-on-scroll" style={{ animationDelay: '0.1s' }}>
          {t.title}
          <br />
          <span className="contact-title-highlight">{t.titleHighlight}</span>
        </h2>
        <p className="section-sub animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          {t.subtitle}
        </p>

        {sent ? (
          <div className="contact-success animate-on-scroll">
            <div className="contact-success-icon">
              <IoCheckmarkDone size={64} />
            </div>
            <h3 className="contact-success-title">{t.successTitle}</h3>
            <p className="contact-success-desc">{t.successDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label>{t.nameLabel}</label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  required
                />
              </div>
              <div className="contact-form-field">
                <label>{t.emailLabel}</label>
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  required
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label>{t.interestLabel}</label>
              <div className="contact-form-options">
                {['Investor', 'Partner', 'Pilot Location', 'Government', 'Media', 'Other'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, type: opt.toLowerCase() }))}
                    className={`contact-form-option ${form.type === opt.toLowerCase() ? 'active' : ''}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-form-field">
              <label>{t.messageLabel}</label>
              <textarea
                placeholder={t.messagePlaceholder}
                rows={4}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              />
            </div>

            <div className="contact-form-footer">
              <div className="contact-form-email">
                <HiMail size={18} />
                {t.emailDirect}{' '}
                <a href="mailto:contact@ecochain.uz">contact@ecochain.uz</a>
              </div>
              <button type="submit" className="btn-primary">
                <HiLightningBolt size={18} />
                {t.sendMessage}
              </button>
            </div>
          </form>
        )}

        <div className="contact-social">
          {[
            { label: t.instagram, icon: IoLogoInstagram, href: 'https://instagram.com/ecochain.uz' },
            { label: t.telegram, icon: FaTelegramPlane, href: 'https://t.me/EcoChainBot' },
            { label: t.linkedin, icon: IoLogoLinkedin, href: '#' },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline animate-on-scroll"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <Icon size={20} />
                {s.label}
                <HiExternalLink size={16} style={{ opacity: 0.6 }} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
