// Simple markdown parser (basic features)
export function parseMarkdown(markdown: string): string {
    let html = markdown

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 id="$1">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 id="$1">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code class="language-$1">$2</code></pre>')

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>')

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>')
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')

    // Paragraphs
    html = html.replace(/\n\n/gim, '</p><p>')
    html = '<p>' + html + '</p>'

    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/gim, '')
    html = html.replace(/<p>(<h[123])/gim, '$1')
    html = html.replace(/(<\/h[123]>)<\/p>/gim, '$1')
    html = html.replace(/<p>(<pre)/gim, '$1')
    html = html.replace(/(<\/pre>)<\/p>/gim, '$1')
    html = html.replace(/<p>(<ul)/gim, '$1')
    html = html.replace(/(<\/ul>)<\/p>/gim, '$1')

    return html
}

// Format date to PT-BR format
export function formatDate(dateString: string | null): string {
    if (!dateString) return ''

    const date = new Date(dateString)
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date)
}

// Format date to ISO 8601 for SEO
export function formatDateISO(dateString: string | null): string {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toISOString()
}

// Estimate reading time from content (words per minute)
export function estimateReadingTime(content: string, wpm: number = 200): number {
    const words = content.trim().split(/\s+/).length
    return Math.ceil(words / wpm)
}

// Extract headings for table of contents
export interface TOCItem {
    id: string
    text: string
    level: number
}

export function extractTableOfContents(markdown: string): TOCItem[] {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const toc: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length
        const text = match[2].trim()
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')

        toc.push({ id, text, level })
    }

    return toc
}
