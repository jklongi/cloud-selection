import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

const adapter = new Adapter()

Enzyme.configure({ adapter })
