import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <body>
            <Head>
              <title>Talis | Beauty Salon</title>
              <link rel="icon" href="/favicon.ico" />
              <link
                href="https://fonts.googleapis.com/css?family=Muli&display=swap"
                rel="stylesheet"
              />
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                      body {
                        font-family: Muli;
                      }
                    `,
                }}
              />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </body>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
