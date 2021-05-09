import { mount } from 'enzyme'
import Styles from './index'

describe('<Styles />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(
            <Styles>
                <div>Hello</div>
            </Styles>,
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('renders its children', () => {
        const wrapper = mount(
            <Styles>
                <div>Hello</div>
            </Styles>,
        )
        expect(wrapper.find('div').text()).toEqual('Hello')
        expect(wrapper.find('div')).toHaveLength(1)
    })
})
