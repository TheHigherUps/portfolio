import Head from "next/head"
import { Navigation } from "@/components/Navigation"

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
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
