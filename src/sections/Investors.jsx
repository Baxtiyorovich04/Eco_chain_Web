import { Check, FileText, Landmark, ShieldCheck, TrendingUp, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { IconTile } from '@/components/IconTile'
import { translations } from '@/utils/translations'
import { cn } from '@/lib/utils'

const rows = [
  ['', 'Year 1', 'Year 2', 'Year 3'],
  ['Machines deployed', '20', '80', '200'],
  ['Bottles/day per machine', '300', '400', '500'],
  ['NFT Certificates (MAIN)', '$150K', '$700K', '$2M'],
  ['PET Plastic Sales', '$50K', '$200K', '$700K'],
  ['In-App Advertising', '$20K', '$100K', '$300K'],
  ['TOTAL REVENUE', '$220K', '$1M', '$3M'],
]

const compare = [
  ['AI Quality Sorting', false, false, true],
  ['Blockchain Certificates', false, false, true],
  ['NAPP Stablecoin Reward', false, false, true],
  ['EPR Compliance Tool', false, false, true],
]

export function Investors({ lang }) {
  const t = translations[lang].investors
  const icons = [Landmark, ShieldCheck, Check, TrendingUp]
  const tones = ['mint', 'gold', 'light', 'mint']

  return (
    <Section id="investors" band>
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading tag={t.tag} title={t.title} subtitle={t.subtitle} />
          <div className="mt-8 space-y-3">
            {t.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <IconTile icon={icons[i]} tone={tones[i]} size="sm" />
                  <div>
                    <div className="font-heading font-semibold">{reason.title}</div>
                    <div className="text-sm text-muted-foreground">{reason.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Button asChild className="mt-6">
              <a href="#contact">
                <FileText className="h-4 w-4" />
                {t.requestDeck}
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="space-y-4">
          <Reveal>
            <Card className="overflow-hidden p-0 hover:translate-y-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left font-heading text-sm">
                  <tbody>
                    {rows.map((row, ri) => (
                      <tr
                        key={row[0] || 'head'}
                        className={cn(
                          ri === 0 && 'bg-white/[0.04] text-xs uppercase tracking-wider text-muted-foreground',
                          ri === 3 && 'bg-gold/10',
                          ri === rows.length - 1 && 'bg-mint/15 font-bold'
                        )}
                      >
                        {row.map((cell, ci) => (
                          <td key={`${ri}-${ci}`} className={cn('px-4 py-3', ci === 0 && 'font-medium')}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Reveal>
          <p className="font-heading text-xs text-muted-foreground">{t.tableNote}</p>

          <Reveal delay={0.08}>
            <Card className="p-5 sm:p-6">
              <div className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.competitiveTitle}
              </div>
              <div className="grid grid-cols-[1.4fr_repeat(3,0.6fr)] items-center gap-2 font-heading text-xs text-muted-foreground">
                <span />
                <span className="text-center">Bins</span>
                <span className="text-center">Manual</span>
                <span className="text-center font-semibold text-mint">EcoChain</span>
              </div>
              <div className="mt-3 space-y-2">
                {compare.map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-[1.4fr_repeat(3,0.6fr)] items-center gap-2 rounded-xl bg-white/[0.03] px-2 py-2.5"
                  >
                    <span className="font-heading text-sm">{row[0]}</span>
                    {row.slice(1).map((ok, i) => (
                      <span key={i} className="flex justify-center">
                        {ok ? (
                          <Check className={cn('h-4 w-4', i === 2 ? 'text-mint' : 'text-muted-foreground')} />
                        ) : (
                          <X className="h-4 w-4 text-danger/80" />
                        )}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
