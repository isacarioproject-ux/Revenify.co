import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function BlogCTACard() {
    return (
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Try Revenify for free
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                        Start tracking your revenue attribution in minutes
                    </p>
                    <Button asChild className="w-full group">
                        <a
                            href="https://app.revenify.co/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <p className="text-xs text-gray-500 mt-3">
                        No credit card required
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
