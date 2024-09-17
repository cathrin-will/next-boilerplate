import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from './index'

describe('Header', () => {
    it('renders without crashing', () => {
        render(<Header />)
    })
})
