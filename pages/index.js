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
            </Head>
            <Navigation />
            <main>
                <h1>Home Page</h1>
            </main>
        </>
    )
}
