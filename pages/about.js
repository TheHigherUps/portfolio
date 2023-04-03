import Head from "next/head"
import { Navigation } from "@/components/Navigation"

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navigation />
            <main>
                <h1>About Me</h1>
            </main>
        </>
    )
}
