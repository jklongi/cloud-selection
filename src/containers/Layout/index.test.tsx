import { mount } from 'enzyme'
import Layout from './index'

describe('<Layout />', () => {
    it('renders children', () => {
        const wrapper = mount(
            <Layout>
                <p>Hello Jest!</p>
            </Layout>,
        )
        expect(wrapper.find('p')).toHaveLength(1)
        expect(wrapper.find('p').text()).toMatch('Hello Jest!')
    })
})
