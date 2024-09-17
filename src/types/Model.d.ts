declare global {
    namespace Model {
        // UI - layout

        type Section = {
            children: ReactNode
            className?: string
        }

        type Container = {
            children: ReactNode
            className?: string
            containerSize?: 'trim' | 'full'
        }

        // UI - components
    }
}

export {}
