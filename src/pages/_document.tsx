import React from 'react'
import Document, { Html, Main, Head, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
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
