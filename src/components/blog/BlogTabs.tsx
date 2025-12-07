import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { BlogCategory } from '@/types/blog'

interface BlogTabsProps {
    categories: BlogCategory[]
    activeCategory: string
    onCategoryChange: (slug: string) => void
}

export function BlogTabs({ categories, activeCategory, onCategoryChange }: BlogTabsProps) {
    return (
        <Tabs value={activeCategory} onValueChange={onCategoryChange} className="w-full">
            <TabsList className="inline-flex h-auto p-1 bg-gray-100 rounded-lg">
                {categories.map((category) => (
                    <TabsTrigger
                        key={category.id}
                        value={category.slug}
                        className="px-4 py-2 text-sm font-medium rounded-md transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                    >
                        {category.name}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )
}
