import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Hello',
    description: 'Hello World',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <main id="main-content">{children}</main>
            </body>
        </html>
    )
}
