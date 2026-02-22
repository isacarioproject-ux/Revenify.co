// src/components/layout/Header.tsx
import { useState } from 'react'
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-4">
      {/* Floating Header Container */}
      <nav className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-4 sm:px-6 h-14 flex items-center justify-between shadow-lg shadow-black/20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Revenify" className="h-5 sm:h-6 w-auto" />
          <span className="text-neutral-100 font-semibold text-base sm:text-lg">Revenify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`${APP_URL}/auth`}
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <AnimatedBorderButton as="a" href={`${APP_URL}/auth?mode=signup`} className="px-4 py-2 text-xs">
            Start Free
          </AnimatedBorderButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-lg shadow-black/20">
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
