import { ExternalLink } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { translations } from '@/utils/translations'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M21.5 4.5 2.8 11.2c-1.3.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.7.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.2-.4-1.7-1.4-1.4ZM8.3 13.7l10.2-6.4c.5-.3 1-.1.6.2l-8.4 7.6-.3 3.4-2.1-4.8Z" />
    </svg>
  )
}

export function Contact({ lang }) {
  const t = translations[lang].contact
  const socials = [
    {
      label: t.instagram,
      handle: '@ecochain_uzb',
      href: 'https://www.instagram.com/ecochain_uzb?igsh=MXcyaWhvN2V4dTFteA==',
      icon: InstagramIcon,
    },
    {
      label: t.telegram,
      handle: '@baxtiyorovich_292',
      href: 'https://t.me/baxtiyorovich_292',
      icon: TelegramIcon,
    },
  ]

  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl">
        <SectionHeading tag={t.tag} title={t.title} highlight={t.titleHighlight} subtitle={t.subtitle} align="center" />

        <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
          {socials.map((social, i) => (
            <Reveal key={social.handle} delay={i * 0.08}>
              <Card className="p-5 hover:translate-y-0">
                <Button asChild variant="outline" size="lg" className="h-auto w-full flex-col gap-1 py-5">
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      <social.icon />
                      {social.label}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </span>
                    <span className="text-sm font-medium text-mint">{social.handle}</span>
                  </a>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
