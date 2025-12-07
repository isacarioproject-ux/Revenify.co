import { AspectRatio } from '@/components/ui/aspect-ratio'

interface BlogImageProps {
    src: string
    alt: string
    caption?: string
    aspectRatio?: number
}

export function BlogImage({ src, alt, caption, aspectRatio = 16 / 9 }: BlogImageProps) {
    return (
        <figure className="my-12">
            <AspectRatio ratio={aspectRatio} className="bg-gray-200 rounded-xl overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="object-cover w-full h-full"
                    loading="lazy"
                />
            </AspectRatio>
            {caption && (
                <figcaption className="mt-3 text-sm text-center text-gray-600 italic">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}
