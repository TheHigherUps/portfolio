import Head from "next/head"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
                <meta
                    name="description"
                    content="A front end web developer with the passion to create unique projects for all!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main></main>
        </>
    )
}
