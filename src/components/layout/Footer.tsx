// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom'
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react'
import { Logo } from '@/components/logo'

const footerLinks = {
  about: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
  ],
  support: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Contact', href: '/contact' },
  ],
  social: [
    { label: 'YouTube', href: 'https://youtube.com/@kleovey?si=k3vLaiwe-v7Y_uet', icon: Youtube },
    { label: 'Facebook', href: 'https://www.facebook.com/share/14TfQRLd77F/', icon: Facebook },
    { label: 'Instagram', href: 'https://www.instagram.com/kleoveyaguaracuto?igsh=MXF5cnZiNjFvcmYxaw==', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kleove-yaguaracuto-295403399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
    { label: 'X', href: 'https://x.com/KleoveY', icon: () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  ],
}

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link to="/" className="inline-block">
              <Logo />
            </Link>

            {/* Tagline */}
            <p className="mt-4 text-sm text-white/30 max-w-[180px]">
              Track every dollar to its source.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {/* About Column */}
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Company</h4>
              <ul className="space-y-1">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="block text-sm text-white/30 hover:text-white/60 py-1 transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-sm font-medium text-white mb-4">Support</h4>
              <ul className="space-y-1">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="block text-sm text-white/30 hover:text-white/60 py-1 transition-colors whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Column */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-medium text-white mb-4">Social</h4>
              <div className="flex flex-wrap gap-3 sm:block sm:space-y-1">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/30 hover:text-white/60 py-1 transition-colors whitespace-nowrap"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-white/20">
            © {new Date().getFullYear()} Revenify. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link
              to="/privacy"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-white/20 hover:text-white/40 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-white/20 hover:text-white/40 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
