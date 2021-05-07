import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Styles from 'containers/Styles'
import Layout from 'containers/Layout'

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <Styles>
            <Layout maxWidth="sm">
                <Component {...pageProps} />
            </Layout>
        </Styles>
    )
}

export default App
