import { cn } from '@/lib/utils'
import React from 'react'

const Title = ({ className, title }: { className?: string, title: string }) => {
    return (
        <h1 className={cn("text-lg sm:text-xl font-bold text-center", className)}>
            <code className="text-primary">{`<${title} />`}</code>
        </h1>
    )
}

export default Title
