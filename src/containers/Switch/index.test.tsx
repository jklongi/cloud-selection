import { mount } from 'enzyme'
import Switch from './index'

describe('<Switch />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(<Switch onChange={() => {}} label="Label" helperText="Helper" />)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders label', () => {
        const wrapper = mount(<Switch onChange={() => {}} label="Label" />)
        expect(wrapper.find('label').text()).toEqual('Label')
    })
    it('renders helper text', () => {
        const wrapper = mount(<Switch onChange={() => {}} label="Label" helperText="Helper" />)
        expect(wrapper.find('p').text()).toEqual('Helper')
    })
    it('input changes trigger callback', () => {
        const onChange = jest.fn()
        const wrapper = mount(<Switch checked={false} onChange={onChange} label="Label" />)
        const input = wrapper.find('input')
        input.simulate('change', { target: { checked: true } })
        expect(onChange).toHaveBeenCalled()
    })

    it('callback value is boolean', () => {
        let state = false
        const onChange = (checked: boolean) => {
            state = checked
        }
        const wrapper = mount(<Switch checked={state} onChange={onChange} label="Label" />)
        const input = wrapper.find('input')
        input.simulate('change', { target: { checked: true } })
        expect(state).toEqual(true)
    })
})
