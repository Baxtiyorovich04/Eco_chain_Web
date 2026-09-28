import { useState } from 'react'
import { Menu } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { translations } from '@/utils/translations'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import logo from '../assets/logo.svg'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
]

function LanguageSwitch({ lang, setLang, onPick }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1" role="group" aria-label="Language">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => {
            setLang(item.code)
            onPick?.()
          }}
          className={cn(
            'h-9 min-w-12 rounded-full px-3.5 font-heading text-sm font-bold tracking-wide transition-colors',
            lang === item.code ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
          )}
          aria-pressed={lang === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export function Nav({ lang, setLang }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const t = translations[lang].nav

  const links = [
    { label: t.howItWorks, href: '#how' },
    { label: t.blockchain, href: '#blockchain' },
    { label: t.machine, href: '#machine' },
    { label: t.investors, href: '#investors' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-background/75 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="font-heading text-lg font-extrabold tracking-tight">
            Eco<span className="text-mint">Chain</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 font-heading text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch lang={lang} setLang={setLang} />
          <Button asChild size="sm">
            <a href="#contact">{t.getInTouch}</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="pr-8">
              Eco<span className="text-mint">Chain</span>
            </SheetTitle>
            <SheetDescription>Site sections and language</SheetDescription>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-heading text-base font-medium text-foreground transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <LanguageSwitch lang={lang} setLang={setLang} onPick={() => setOpen(false)} />
            <Button asChild className="mt-auto">
              <a href="#contact" onClick={() => setOpen(false)}>
                {t.getInTouch}
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
