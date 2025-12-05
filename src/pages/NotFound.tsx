import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-bold text-gray-900">404</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-900">
                Page not found
            </p>
            <p className="mt-2 text-lg text-gray-600">
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Button className="mt-8" asChild>
                <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to home
                </Link>
            </Button>
        </div>
    )
}
