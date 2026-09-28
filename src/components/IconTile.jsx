import { cn } from '@/lib/utils'

const tones = {
  mint: 'bg-mint/15 text-mint ring-mint/25',
  light: 'bg-mint-light/15 text-mint-light ring-mint-light/25',
  gold: 'bg-gold/15 text-gold ring-gold/30',
  sage: 'bg-white/5 text-muted-foreground ring-white/10',
  danger: 'bg-danger/10 text-danger ring-danger/25',
}

export function IconTile({ icon: Icon, tone = 'mint', className, size = 'md' }) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-2xl ring-1',
        size === 'sm' ? 'h-10 w-10' : 'h-12 w-12',
        tones[tone],
        className
      )}
    >
      <Icon className={size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} strokeWidth={1.75} />
    </div>
  )
}
