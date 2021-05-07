import React from 'react'
import Document, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import { ServerStyleSheets } from '@material-ui/core/styles'

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                    />
                    <meta name="description" content="cloud selection tool" />
                    <title>Cloud Selection</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

AppDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        })
    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
}

export default AppDocument
