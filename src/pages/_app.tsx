import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
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
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="cloud selection tool" />
                <title>Cloud Selection</title>
            </Head>
            <Styles>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Styles>
        </>
    )
}

export default App
