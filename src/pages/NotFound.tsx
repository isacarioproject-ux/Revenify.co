import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnimatedBorderButton } from '@/components/ui/moving-border'

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-center text-center px-6 bg-black">
                <h1 className="text-9xl font-bold bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent">404</h1>
                <p className="mt-4 text-2xl font-semibold text-white">
                    Page not found
                </p>
                <p className="mt-2 text-lg text-white/50">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-8">
                    <AnimatedBorderButton as={Link} to="/" className="px-6 py-3 text-sm">
                        <Home className="mr-2 h-4 w-4" />
                        Back to home
                    </AnimatedBorderButton>
                </div>
            </main>
            <Footer />
        </>
    )
}
