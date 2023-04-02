import styles from "@/styles/Navigation.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"

export function Navigation() {
    const router = useRouter()
    return (
        <header className={styles.navigationHeader}>
            <nav className={styles.navigation}>
                <Link
                    href="/"
                    className={
                        router.pathname == "/" ? styles.activeLink : null
                    }
                >
                    Home
                </Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
            </nav>
            <h1 style={{ textAlign: "center", color: "#fff" }}>My Portfolio</h1>
            <nav
                className={styles.navigation}
                style={{ justifyContent: "flex-end" }}
            >
                <Link
                    href="https://twitter.com/TheHigherUpsOrg"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <TwitterIcon sx={{ color: "#1DA1F2" }} />
                </Link>
                <Link
                    href="https://g.dev/thehigherups"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <GoogleIcon />
                </Link>
                <Link
                    href="https://github.com/TheHigherUps"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <GitHubIcon />
                </Link>
            </nav>
        </header>
    )
}
