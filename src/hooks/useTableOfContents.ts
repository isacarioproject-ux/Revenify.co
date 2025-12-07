import { useMemo } from 'react'
import { extractTableOfContents, type TOCItem } from '@/lib/markdown-utils'

export function useTableOfContents(markdown: string): TOCItem[] {
    return useMemo(() => {
        return extractTableOfContents(markdown)
    }, [markdown])
}
