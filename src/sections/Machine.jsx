import { Bot, Box, MapPin, MonitorSmartphone, ShieldCheck, Trash2 } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { IconTile } from '@/components/IconTile'
import { translations } from '@/utils/translations'

export function Machine({ lang }) {
  const t = translations[lang].machine
  const icons = [Bot, Trash2, MonitorSmartphone, MapPin, ShieldCheck, Box]
  const tones = ['light', 'sage', 'mint', 'gold', 'sage', 'mint']

  return (
    <Section id="machine">
      <SectionHeading tag={t.tag} title={t.title} highlight={t.titleHighlight} subtitle={t.subtitle} align="center" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.05}>
            <Card className="h-full p-6">
              <IconTile icon={icons[i]} tone={tones[i]} />
              <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
