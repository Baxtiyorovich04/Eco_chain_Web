import { translations } from '@/utils/translations'
import { Separator } from '@/components/ui/separator'
import logo from '../assets/logo.svg'

export function Footer({ lang }) {
  const t = translations[lang].nav
  const links = [
    { label: t.howItWorks, href: '#how' },
    { label: t.blockchain, href: '#blockchain' },
    { label: t.machine, href: '#machine' },
    { label: t.investors, href: '#investors' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <footer className="px-5 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-8 w-8" />
            <span className="font-heading text-lg font-extrabold">
              Eco<span className="text-mint">Chain</span>
            </span>
            <span className="font-heading text-xs text-muted-foreground">© 2025 · Tashkent, Uzbekistan</span>
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
