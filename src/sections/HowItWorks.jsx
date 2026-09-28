import { Banknote, Box, Camera, QrCode, Recycle, Trash2 } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { IconTile } from '@/components/IconTile'
import { translations } from '@/utils/translations'

export function HowItWorks({ lang }) {
  const t = translations[lang].howItWorks
  const icons = [Trash2, Recycle, Camera, Box, QrCode, Banknote]
  const tones = ['sage', 'mint', 'light', 'gold', 'mint', 'light']

  return (
    <Section id="how">
      <SectionHeading tag={t.tag} title={t.title} subtitle={t.subtitle} align="center" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.06}>
            <Card className="h-full p-6">
              <div className="mb-5 flex items-center justify-between">
                <IconTile icon={icons[i]} tone={tones[i]} />
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
