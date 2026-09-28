import { BadgeCheck, Box, CheckCircle2, Factory, Globe, Landmark, Recycle, ShieldCheck, TrendingUp, Wallet } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { IconTile } from '@/components/IconTile'
import { translations } from '@/utils/translations'
import { cn } from '@/lib/utils'

export function Blockchain({ lang }) {
  const t = translations[lang].blockchain
  const featureIcons = [ShieldCheck, Globe, Landmark, TrendingUp]
  const flowIcons = [Recycle, Box, BadgeCheck, Factory, Landmark]

  return (
    <Section id="blockchain" band>
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading tag={t.tag} title={t.nftTitle} highlight={t.nftRevenue} />
          <Reveal delay={0.18}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.nftDesc}</p>
          </Reveal>
          <div className="mt-8 space-y-3">
            {t.features.map((feature, i) => (
              <Reveal key={feature.title} delay={0.05 * i}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-card/80 p-4">
                  <IconTile icon={featureIcons[i]} tone={i === 3 ? 'gold' : 'mint'} size="sm" />
                  <div>
                    <div className="font-heading font-semibold">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Reveal>
            <Card className="p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-4">
                <IconTile icon={Wallet} tone="gold" />
                <div>
                  <div className="font-heading text-lg font-bold">{t.stablecoinTitle}</div>
                  <div className="text-sm text-muted-foreground">{t.stablecoinSubtitle}</div>
                </div>
              </div>
              <ul className="space-y-3">
                {t.stablecoinPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <BadgeCheck className="h-4 w-4 text-mint" />
                {t.nftFlowTitle}
              </div>
              <ol>
                {t.nftFlowSteps.map((label, i) => {
                  const Icon = flowIcons[i]
                  const highlight = i === 2
                  return (
                    <li key={label} className="relative flex gap-4 pb-5 last:pb-0">
                      {i < t.nftFlowSteps.length - 1 ? (
                        <span className="absolute left-5 top-10 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-mint/50 to-white/5" />
                      ) : null}
                      <div
                        className={cn(
                          'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1',
                          highlight ? 'bg-gold/15 text-gold ring-gold/30' : 'bg-mint/10 text-mint ring-mint/25'
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className={cn('pt-2 font-heading text-sm', highlight && 'font-semibold text-gold')}>
                        {label}
                      </span>
                    </li>
                  )
                })}
              </ol>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
