import Container, { ContainerProps } from '@material-ui/core/Container'

type Props = ContainerProps & {
    children: React.ReactNode
}

const Layout = ({ children, ...rest }: Props) => (
    <Container {...rest}>
        <div>{children}</div>
    </Container>
)

export default Layout
