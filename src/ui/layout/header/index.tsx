import { cn } from '@/lib/utils'

// ui
import Burger from '@/ui/layout/burger'
import Nav from '@/ui/layout/nav'
import SkipToContent from '@/ui/layout/skipToContent'

// styles
import styles from './header.module.scss'

export default function Header() {
    return (
        <>
            <SkipToContent />

            <header className={cn(styles.header)}>
                <Nav />
                <Burger />
            </header>
        </>
    )
}
