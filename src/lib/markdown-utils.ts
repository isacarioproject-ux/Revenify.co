// Simple markdown parser (basic features)
export function parseMarkdown(markdown: string): string {
    let html = markdown

    // Normalize line breaks
    html = html.replace(/\r\n/g, '\n')

    // Code blocks first (to protect content inside)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (_, lang, code) => {
        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        return `<pre><code class="language-${lang || ''}">${escapedCode}</code></pre>`
    })

    // Headers
    html = html.replace(/^### (.*$)/gim, (_, text) => {
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
        return `<h3 id="${id}">${text}</h3>`
    })
    html = html.replace(/^## (.*$)/gim, (_, text) => {
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
        return `<h2 id="${id}">${text}</h2>`
    })
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>')

    // Process lists (unordered with - or *)
    html = html.replace(/^[\-\*] (.+)$/gim, '<li>$1</li>')
    
    // Process ordered lists
    html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>')

    // Wrap consecutive <li> items in <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>)(\n<li>[\s\S]*?<\/li>)*/gim, (match) => {
        return `<ul>${match}</ul>`
    })

    // Blockquotes
    html = html.replace(/^> (.+)$/gim, '<blockquote>$1</blockquote>')

    // Horizontal rules
    html = html.replace(/^---$/gim, '<hr />')

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img src="$2" alt="$1" class="rounded-lg shadow-md my-6" />')

    // Paragraphs - split by double newlines
    const blocks = html.split(/\n\n+/)
    html = blocks.map(block => {
        block = block.trim()
        if (!block) return ''
        // Don't wrap if already a block element
        if (block.startsWith('<h') || 
            block.startsWith('<pre') || 
            block.startsWith('<ul') || 
            block.startsWith('<ol') || 
            block.startsWith('<blockquote') ||
            block.startsWith('<hr') ||
            block.startsWith('<img')) {
            return block
        }
        // Wrap in paragraph, handling single line breaks as <br>
        return `<p>${block.replace(/\n/g, '<br />')}</p>`
    }).join('\n')

    // Clean up any remaining issues
    html = html.replace(/<p><\/p>/gim, '')
    html = html.replace(/<p>\s*<\/p>/gim, '')

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
