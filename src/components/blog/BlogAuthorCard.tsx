import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface BlogAuthorCardProps {
    name: string
    avatar: string | null
    bio?: string
}

export function BlogAuthorCard({ name, avatar, bio }: BlogAuthorCardProps) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14">
                        <AvatarImage src={avatar || undefined} />
                        <AvatarFallback className="text-lg">
                            {name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {name}
                        </h3>
                        {bio && (
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {bio}
                            </p>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
