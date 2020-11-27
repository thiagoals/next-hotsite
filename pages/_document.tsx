import Document, { Html,Head,Main,NextScript } from 'next/document';

export default class CustomDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <head><title>{process.env.SiteName}</title></head>
                    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
                    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
                    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
                    <link rel="stylesheet" href={`./templates/${process.env.Template}/assets/css/custom.css`}></link>

                    <script>var Alert = ReactBootstrap.Alert;</script>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}