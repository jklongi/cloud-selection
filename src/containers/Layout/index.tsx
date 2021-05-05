import Container from '@material-ui/core/Container'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => (
    <Container>
        <div>{children}</div>
    </Container>
)

export default Layout
