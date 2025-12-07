import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Play } from 'lucide-react'

interface BlogVideoProps {
    src: string
    title?: string
    thumbnail?: string
    type?: 'youtube' | 'vimeo' | 'direct'
}

export function BlogVideo({ src, title, thumbnail, type = 'direct' }: BlogVideoProps) {
    // Convert YouTube/Vimeo links to embed format
    const getEmbedUrl = () => {
        if (type === 'youtube') {
            const videoId = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]
            return videoId ? `https://www.youtube.com/embed/${videoId}` : src
        }
        if (type === 'vimeo') {
            const videoId = src.match(/vimeo\.com\/(\d+)/)?.[1]
            return videoId ? `https://player.vimeo.com/video/${videoId}` : src
        }
        return src
    }

    const embedUrl = getEmbedUrl()

    return (
        <div className="my-12">
            {title && (
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
            )}
            <AspectRatio ratio={16 / 9} className="bg-gray-900 rounded-xl overflow-hidden">
                {type === 'direct' && thumbnail ? (
                    // Show thumbnail with play button for direct videos
                    <div className="relative h-full group cursor-pointer">
                        <img
                            src={thumbnail}
                            alt={title || 'Video thumbnail'}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                            <div className="bg-white/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                                <Play className="h-12 w-12 text-gray-900 fill-gray-900" />
                            </div>
                        </div>
                    </div>
                ) : (
                    // Embed iframe for YouTube/Vimeo or direct video
                    <iframe
                        src={embedUrl}
                        title={title || 'Video'}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </AspectRatio>
        </div>
    )
}
