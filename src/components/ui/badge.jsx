import { cn } from '@/lib/utils'

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-mint',
        className
      )}
      {...props}
    />
  )
}
