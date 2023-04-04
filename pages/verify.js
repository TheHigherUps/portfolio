import Head from "next/head"
import { useState } from "react"

export default function Verify() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            let res = await fetch("/api/verify", {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            let jsonResponse = await res.json()
            console.log(jsonResponse)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Head>
                <title>Verify to Continue</title>
            </Head>
            <main style={{ display: "grid", placeItems: "center" }}>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        gap: "1rem",
                    }}
                    action="/api/verify"
                    method="POST"
                >
                    <label htmlFor="username">Enter Username:</label>
                    <input
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Enter Password:</label>
                    <input
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}
