import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { TOCItem } from '@/lib/markdown-utils'

interface BlogTableOfContentsProps {
    items: TOCItem[]
}

export function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
    if (items.length === 0) return null

    const handleClick = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-auto max-h-96">
                    <nav>
                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className={item.level === 3 ? 'ml-4' : ''}
                                >
                                    <button
                                        onClick={() => handleClick(item.id)}
                                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors text-left w-full"
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
