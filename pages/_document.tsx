import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html style={{height: "100%"}}>
                <Head></Head>
                <body className="carbg" style={{height: "100%"}}>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
