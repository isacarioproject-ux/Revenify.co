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
            <TabsList className="inline-flex flex-wrap justify-center h-auto p-1 bg-white/5 border border-white/10 rounded-lg gap-1">
                {categories.map((category) => (
                    <TabsTrigger
                        key={category.id}
                        value={category.slug}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md text-white/50 transition-all data-[state=active]:bg-neutral-800 data-[state=active]:text-white data-[state=active]:shadow-sm"
                    >
                        {category.name}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )
}
