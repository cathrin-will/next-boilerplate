'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { navOpenAtom } from '@/store/atoms'
import { useStore, useAtomValue } from 'jotai'

//
// styles
import styles from './nav.module.scss'

const Nav = () => {
    const store = useStore()
    const navOpen = useAtomValue(navOpenAtom, { store })
    return (
        <nav className={cn(navOpen ? styles['nav--open'] : '', styles.nav)}>
            <ul className={styles['nav__list']}>
                <li>
                    <Link href="/">Navigation Item</Link>
                </li>
                <li>
                    <Link href="/">Navigation Item</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
