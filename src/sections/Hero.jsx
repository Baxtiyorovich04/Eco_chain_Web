import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BarChart3 } from 'lucide-react'
import { NodeNetwork } from '@/components/NodeNetwork'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { translations } from '@/utils/translations'

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1600
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setVal(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Hero({ lang }) {
  const t = translations[lang].hero
  const reduce = useReducedMotion()
  const stats = [
    { val: 18, suffix: 'M', prefix: '', label: t.stat1Label, note: t.stat1Note, tone: 'text-mint' },
    { val: 6, suffix: '.6%', prefix: '', label: t.stat2Label, note: t.stat2Note, tone: 'text-gold' },
    { val: 864, suffix: 'M', prefix: '$', label: t.stat3Label, note: t.stat3Note, tone: 'text-mint-light' },
  ]

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <NodeNetwork />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,173,92,0.2),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>{t.tag}</Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {t.title}
            <br />
            <span className="bg-gradient-to-r from-mint via-mint-light to-gold bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{t.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#how">
                {t.seeHow}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#investors">
                <BarChart3 className="h-4 w-4" />
                {t.forInvestors}
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md sm:grid-cols-3"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 px-6 py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0">
              <div className={`font-mono text-4xl font-semibold tabular-nums ${stat.tone}`}>
                <AnimatedCounter target={stat.val} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="mt-2 font-heading text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="font-heading text-xs text-muted-foreground">{stat.note}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
