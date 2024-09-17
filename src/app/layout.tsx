import type { Metadata } from 'next'
import StoreProvider from '@/store/storeProvider'

// ui
import Header from '@/ui/layout/header'
import Footer from '@/ui/layout/footer'

// styles
import '@/ui/styles/globals.css'
import styles from '@/ui/styles/layout.module.scss'

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
            <body className={styles.body}>
                <StoreProvider>
                    <Header />
                    <main id="main-content" className={styles.main}>
                        {children}
                    </main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    )
}
