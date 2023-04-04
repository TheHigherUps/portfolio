// export const config = {
//     api: {
//         bodyParser: true,
//     },
// }
import { serialize } from "cookie"

export default function handler(req, res) {
    const method = req.method
    const correctPassword = process.env.PASSWORD
    const { username, password } = req.body

    if (req.method !== "POST")
        return res.status(405).json({ message: "METHOD NOT ALLOWED" })
    if (!(username && password)) {
        return res
            .status(400)
            .json({ message: "A username and password is required" })
    }
    if (password !== correctPassword) {
        return res.status(401).json({
            message: "The password entered is not the correct password",
        })
    }
    const cookie = serialize("login", "true", {
        path: "/",
        httpOnly: true,
    })
    res.setHeader("Set-Cookie", cookie)
    res.redirect(302, "/")
}
