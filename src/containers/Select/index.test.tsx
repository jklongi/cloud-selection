import { mount } from 'enzyme'
import MenuItem from '@material-ui/core/MenuItem'
import Select from './index'

const items = [
    { name: 'First', value: '1' },
    { name: 'Second', value: '2' },
    { name: 'Third', value: '3' },
]

describe('<Select />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(<Select items={items} onChange={() => {}} label="Label" id="select" />)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders label', () => {
        const wrapper = mount(<Select items={items} onChange={() => {}} label="Label" id="select" />)
        expect(wrapper.find('label').text()).toEqual('Label')
    })
    it('changes fire callback', () => {
        const onChange = jest.fn()
        const wrapper = mount(<Select items={items} onChange={onChange} label="Label" id="select" />)
        wrapper.find('[role="button"]').simulate('mousedown', { button: 0 })
        wrapper.find(MenuItem).at(2).simulate('click')
        expect(onChange).toHaveBeenCalled()
    })

    it('changes provides correct callback value with single select', () => {
        let state: string[] = []
        const onChange = (selected: string[]) => {
            state = selected
        }
        const wrapper = mount(<Select items={items} onChange={onChange} label="Label" id="select" />)
        wrapper.find('[role="button"]').simulate('mousedown', { button: 0 })
        wrapper.find(MenuItem).at(2).simulate('click')
        expect(state).toEqual(['3'])
    })
    it('changes provides correct callback value with multiple select', () => {
        let state: string[] = []
        const onChange = (selected: string[]) => {
            state = selected
        }
        const wrapper = mount(<Select items={items} onChange={onChange} label="Label" id="select" />)
        wrapper.find('[role="button"]').simulate('mousedown', { button: 0 })
        console.log(wrapper.find(MenuItem).at(2).simulate('click'))
        console.log(wrapper.find(MenuItem).at(0).simulate('click'))
        expect(state).toEqual(['3', '1'])
    })
})
