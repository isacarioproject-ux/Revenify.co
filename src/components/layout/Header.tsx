// src/components/layout/Header.tsx
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { APP_URL } from '@/lib/constants'
import { AnimatedBorderButton } from '@/components/ui/moving-border'

const navigation = [
  { name: 'Integrations', href: '/integrations' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      if (window.scrollY > 10) setMobileMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 pt-4 lg:pt-6 transition-all duration-300 pointer-events-none">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 xl:px-12 pointer-events-auto">
        <div className="relative flex items-center justify-between h-14 lg:h-[72px] transition-all duration-300">

          {/* Background Pill extending outside the content edges symmetrically */}
          <div className={`absolute inset-y-0 -left-4 -right-4 sm:-left-6 sm:-right-6 md:-left-8 md:-right-8 rounded-full transition-all duration-300 pointer-events-none ${scrolled ? 'bg-[#050505]/70 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent opacity-0'}`} />

          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-2 lg:gap-3">
            <img src="/logo.png" alt="Revenify" className="h-7 sm:h-8 lg:h-9 w-auto" />
            <span className="text-neutral-100 font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">Revenify</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm lg:text-base font-medium text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="relative z-10 hidden lg:flex items-center gap-5">
            <a
              href={`${APP_URL}/auth`}
              className="text-sm lg:text-base font-medium text-white/60 hover:text-white transition-colors"
            >
              Sign in
            </a>
            <AnimatedBorderButton as="a" href={`${APP_URL}/auth?mode=signup`} className="px-5 py-2 text-xs lg:text-sm font-semibold uppercase tracking-wider">
              Start Free
            </AnimatedBorderButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-lg shadow-black/20 pointer-events-auto">
          <div className="px-5 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-base text-white/60 hover:text-white transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.08] space-y-3">
              <a
                href={`${APP_URL}/auth`}
                className="block text-base text-white/60 hover:text-white transition-colors py-1"
              >
                Sign In
              </a>
              <a
                href={`${APP_URL}/auth?mode=signup`}
                className="block w-full text-center bg-white text-black px-4 py-3 rounded-full font-medium text-sm"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
