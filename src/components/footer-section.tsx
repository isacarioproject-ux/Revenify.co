import { Link } from 'react-router-dom'
import { Logo } from '@/components/logo'
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'
import { NAVIGATION, SOCIAL_LINKS } from '@/lib/constants'

export default function FooterSection() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <div className="col-span-2 md:col-span-1">
                        <Logo />
                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Track every dollar back to its source with powerful revenue
                            attribution analytics.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {NAVIGATION.product.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {NAVIGATION.resources.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                        {...((item as any).external && { target: '_blank', rel: 'noopener noreferrer' })}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {NAVIGATION.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Revenify. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {NAVIGATION.legal.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
