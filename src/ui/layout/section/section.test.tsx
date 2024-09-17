import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Section from './index'

describe('Container', () => {
    it('renders without crashing', () => {
        render(
            <Section>
                <p>section</p>
            </Section>,
        )
    })
})
