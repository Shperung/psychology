import Document, { Html, Head, Main, NextScript } from 'next/document';

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ua">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="keywords"
            content="Психолог Винница, Психолог Вінниця, Психолог Киев, Психолог Київ, Редько Тетяна Георгіївна, Редько Татьяна Георгиевна"
          />
          <meta
            name="description"
            content="Лікар-психіатр вищої кваліфікаційної категорії. Кандидат медичних наук. Медичний психолог. Психотерапевт. Регресивний гіпнолог. Редько Тетяна Георгіївна"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5G5PFM7');`,
            }}
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5G5PFM7"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
            }}
          ></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
