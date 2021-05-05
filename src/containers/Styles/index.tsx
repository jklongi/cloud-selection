import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'styles/themes'

type Props = {
    children: React.ReactNode
}

const Styles = ({ children }: Props) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
)

export default Styles
