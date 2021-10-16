import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
       <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin/>
        <link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Noto+Serif+Display:wght@300;500&display=swap' rel='stylesheet'/>

        <link rel='apple-touch-icon' sizes='180x180' href='meta/apple-touch-icon.png'/>
        <link rel='icon' type='image/png' sizes='32x32' href='/meta/favicon-32x32.png'/>
        <link rel='icon' type='image/png' sizes='16x16' href='/meta/favicon-16x16.png'/>
        <link rel='manifest' href='/meta/site.webmanifest'/>
        <link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#aca784'/>
        <meta name='msapplication-TileColor' content='#aca784'/>
        <meta name='theme-color' content='#aca784'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}