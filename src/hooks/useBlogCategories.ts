import { useState, useEffect } from 'react'
import { getBlogCategories } from '@/lib/blog-queries'
import type { BlogCategory } from '@/types/blog'

export function useBlogCategories() {
    const [categories, setCategories] = useState<BlogCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchCategories() {
            try {
                setLoading(true)
                const data = await getBlogCategories()

                // Add "Visão Geral" as the first category
                setCategories([
                    {
                        id: 'all',
                        name: 'Visão Geral',
                        slug: 'all',
                        description: 'Todos os posts',
                    },
                    ...data,
                ])
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchCategories()
    }, [])

    return { categories, loading, error }
}
