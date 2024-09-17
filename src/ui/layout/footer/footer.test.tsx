import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Footer from './index'

describe('Footer', () => {
    it('renders without crashing', () => {
        render(<Footer />)
    })
})
