import { parseMarkdown } from '@/lib/markdown-utils'

interface BlogMarkdownProps {
    content: string
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
    const html = parseMarkdown(content)

    return (
        <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
