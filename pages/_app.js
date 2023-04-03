import "@/styles/globals.css"
import { Montserrat } from "next/font/google"
import { Footer } from "@/components/Footer"
import Head from "next/head"

const font = Montserrat({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <style jsx global>{`
                html {
                    font-family: ${font.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
