import { parseMarkdown } from '@/lib/markdown-utils'

interface BlogMarkdownProps {
    content: string
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
    const html = parseMarkdown(content)

    return (
        <div
            className="prose prose-lg prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-white
                prose-h1:text-4xl prose-h1:mt-8 prose-h1:mb-6
                prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-5
                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-300
                prose-strong:text-white prose-strong:font-semibold
                prose-em:text-white/80 prose-em:italic
                prose-code:text-cyan-400 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-[#0D0D0D] prose-pre:border prose-pre:border-white/10 prose-pre:text-white/80 prose-pre:p-5 prose-pre:rounded-xl prose-pre:overflow-x-auto
                prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-white/60
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5 prose-ul:space-y-2
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-5 prose-ol:space-y-2
                prose-li:text-white/70 prose-li:mb-1
                prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-white/10
                prose-hr:border-white/10 prose-hr:my-8
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-white/5 prose-th:text-white prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-white/10
                prose-td:text-white/70 prose-td:p-3 prose-td:border prose-td:border-white/10"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
