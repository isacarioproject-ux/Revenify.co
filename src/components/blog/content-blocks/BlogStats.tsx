import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface BlogStatProps {
    value: string
    label: string
    icon?: 'trending' | 'dollar' | 'users' | 'zap'
}

interface BlogStatsProps {
    stats: BlogStatProps[]
    title?: string
}

const iconMap = {
    trending: TrendingUp,
    dollar: DollarSign,
    users: Users,
    zap: Zap,
}

export function BlogStats({ stats, title }: BlogStatsProps) {
    return (
        <div className="my-12">
            {title && (
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon ? iconMap[stat.icon] : TrendingUp
                    return (
                        <Card
                            key={index}
                            className="border-2 hover:shadow-lg transition-shadow"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Icon className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-3xl font-bold text-gray-900 mb-1">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
