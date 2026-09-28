import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 font-heading text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/30 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    ref={ref}
    {...props}
  />
))
Input.displayName = 'Input'

export { Input }
