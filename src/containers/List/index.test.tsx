import { mount } from 'enzyme'
import List from './index'

const items = [{ id: 1 }, { id: 2 }, { id: 3 }]

describe('<List />', () => {
    it('renders its container', () => {
        const wrapper = mount(
            <List Container={'p'} items={items} renderItem={(item) => <span key={item.id}>{item.id}</span>} />,
        )
        expect(wrapper.find('p')).toHaveLength(1)
    })

    it('renders nodes equal to items', () => {
        const wrapper = mount(
            <List Container={'p'} items={items} renderItem={(item) => <span key={item.id}>{item.id}</span>} />,
        )
        expect(wrapper.find('span')).toHaveLength(items.length)
    })

    it('renders its children', () => {
        const wrapper = mount(
            <List Container={'p'} items={items} renderItem={(item) => <span key={item.id}>{item.id}</span>} />,
        )
        expect(wrapper.text()).toEqual('123')
    })
})
