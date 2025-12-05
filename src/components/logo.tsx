import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <img 
                src="/logo.png" 
                alt="Revenify" 
                className="h-8 w-auto"
            />
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <img 
            src="/logo.png" 
            alt="Revenify" 
            className={cn('h-8 w-8 object-contain', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <img 
            src="/logo.png" 
            alt="Revenify" 
            className={cn('h-7 w-auto', className)}
        />
    )
}
