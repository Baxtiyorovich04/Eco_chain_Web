import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function Section({ id, children, className, band = false }) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-20 overflow-x-clip px-5 py-20 sm:px-8 md:py-28',
        band && 'bg-[linear-gradient(180deg,rgba(17,41,24,0.55),transparent)]',
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeading({ tag, title, subtitle, align = 'left', highlight, className }) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-2xl text-center', className)}>
      {tag ? (
        <Reveal>
          <Badge className="mb-5">{tag}</Badge>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2 className="text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl">
          {title}
          {highlight ? (
            <>
              <br />
              <span className="bg-gradient-to-r from-mint to-mint-light bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          ) : null}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg',
              align === 'center' && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
