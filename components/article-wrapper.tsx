import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function ArticleWrapper({ children, href }: { href: string, children: ReactNode }) {
    return (
        <article className="w-fit hover:scale-105 transition-all">
            <Link href={href} className="w-full cursor-pointer ">
                {children}
            </Link>
        </article>
    )
}
