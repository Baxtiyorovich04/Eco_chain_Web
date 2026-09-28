import { Building2 } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { translations } from '@/utils/translations'
import { cn } from '@/lib/utils'

const tones = {
  danger: 'text-danger',
  gold: 'text-gold',
  mint: 'text-mint',
}

export function Problem({ lang }) {
  const t = translations[lang].problem
  const stats = [
    { n: '1.8M', l: 'Tons of plastic/year', c: 'danger' },
    { n: '6.6%', l: 'Recycling rate', c: 'gold' },
    { n: '15%', l: 'Of all municipal waste', c: 'mint' },
    { n: '147%', l: 'Increase since 2013', c: 'danger' },
  ]
  const roadmap = [
    { year: '2026', pct: '50%', width: 'w-1/2', active: false },
    { year: '2027', pct: '75%', width: 'w-3/4', active: false },
    { year: '2028', pct: '100%', width: 'w-full', active: true },
  ]

  return (
    <Section band>
      <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionHeading tag={t.tag} title={t.title} subtitle={t.subtitle} />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <Reveal key={stat.l} delay={0.05 * i}>
                <Card className="p-5 hover:translate-y-0">
                  <div className={cn('font-mono text-3xl font-semibold tabular-nums', tones[stat.c])}>{stat.n}</div>
                  <div className="mt-1 font-heading text-sm text-muted-foreground">{stat.l}</div>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-4 font-heading text-xs text-muted-foreground">{t.source}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <Card className="p-6 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/15 text-mint ring-1 ring-mint/25">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">{t.eprTitle}</h3>
            <p className="mt-3 text-muted-foreground">{t.eprDesc}</p>
            <div className="mt-6 space-y-4">
              {roadmap.map((row) => (
                <div key={row.year}>
                  <div className="mb-1.5 flex items-center justify-between font-heading text-sm">
                    <span className={row.active ? 'text-gold' : 'text-foreground'}>{row.year}</span>
                    <span className={row.active ? 'text-gold' : 'text-muted-foreground'}>{row.pct} required</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className={cn('h-full rounded-full', row.width, row.active ? 'bg-gold' : 'bg-mint')} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
