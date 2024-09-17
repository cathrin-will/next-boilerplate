import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/ui/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            screens: {
                nav: { max: '768px' },
            },

            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
}
export default config
