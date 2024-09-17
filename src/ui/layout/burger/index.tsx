'use client'
import { cn } from '@/lib/utils'
import { Twirl as Hamburger } from 'hamburger-react'

// store
import { useStore, useAtom } from 'jotai'
import { navOpenAtom } from '@/store/atoms'

// styles
import styles from './burger.module.scss'

export default function Burger() {
    const [navOpen, setNavOpen] = useAtom(navOpenAtom, {
        store: useStore(),
    })

    return (
        <div className={cn(styles.burger)}>
            <Hamburger
                color="#000"
                size={48}
                toggled={navOpen}
                onToggle={(toggled) => {
                    if (toggled) {
                        setNavOpen(true)
                    } else {
                        setNavOpen(false)
                    }
                }}
            />
        </div>
    )
}
