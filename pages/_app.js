import "@/styles/globals.css"
import { Montserrat } from "next/font/google"
import { Footer } from "@/components/Footer"

const font = Montserrat({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
    return (
        <>
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
