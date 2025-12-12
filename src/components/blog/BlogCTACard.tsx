import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { APP_URL } from '@/lib/constants'

export function BlogCTACard() {
    return (
        <Card className="bg-white/[0.02] border-white/10">
            <CardContent className="p-6">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Try Revenify for free
                    </h3>
                    <p className="text-sm text-white/60 mb-6">
                        Start tracking your revenue attribution in minutes
                    </p>
                    <Button asChild className="w-full group">
                        <a href={`${APP_URL}/auth?tab=signup`}>
                            Start Free Trial
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <p className="text-xs text-white/40 mt-3">
                        No credit card required
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
