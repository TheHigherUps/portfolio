import Head from "next/head"
import { Navigation } from "@/components/Navigation"

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta
                    name="description"
                    content="An up-to-date list of all of the project that I worked on, along with upcoming projects I am working on"
                />
            </Head>
            <Navigation />
            <main>
                <h1>My Projects</h1>
                <ul>
                    <li>TheHigherUps</li>
                    <li>TheHigherUps Shop</li>
                    <li>TheHigherUps Accounts</li>
                    <li>Firebase Admin Panel</li>
                </ul>
            </main>
        </>
    )
}
