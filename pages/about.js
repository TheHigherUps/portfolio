import Head from "next/head"
import { Navigation } from "@/components/Navigation"

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta
                    name="description"
                    content="A brief little description about who I am and what im passionate about"
                />
            </Head>
            <Navigation />
            <main>
                <h1>About Me</h1>
            </main>
        </>
    )
}
