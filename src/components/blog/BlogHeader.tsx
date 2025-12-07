import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { APP_URL } from '@/lib/constants'

export function BlogHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <Logo />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        to="/pricing"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/blog"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/docs"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Docs
                    </Link>
                </nav>

                {/* CTA Buttons */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" asChild>
                        <a href={APP_URL}>
                            Sign in
                        </a>
                    </Button>
                    <Button asChild>
                        <a href={APP_URL}>
                            Start Free
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    )
}
