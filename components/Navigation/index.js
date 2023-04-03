import styles from "@/styles/Navigation.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import GitHubIcon from "@mui/icons-material/GitHub"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"

export function Navigation() {
    const router = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false)
    function handleNavOpen() {
        setMobileOpen((prevState) => !prevState)
    }
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
                <Link
                    href="/about"
                    className={
                        router.pathname == "/about" ? styles.activeLink : null
                    }
                >
                    About
                </Link>
                <Link
                    href="/projects"
                    className={
                        router.pathname == "/projects"
                            ? styles.activeLink
                            : null
                    }
                >
                    Projects
                </Link>
            </nav>
            <button className={styles.mobileNavButton} onClick={handleNavOpen}>
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <h1 style={{ textAlign: "center", color: "#fff" }}>My Portfolio</h1>
            <nav className={styles.navigation}>
                <Link
                    href="https://twitter.com/TheHigherUpsOrg"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <TwitterIcon
                        sx={{ color: "#1DA1F2" }}
                        className={styles.headerIcon}
                    />
                </Link>
                <Link
                    href="https://g.dev/thehigherups"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <GoogleIcon className={styles.headerIcon} />
                </Link>
                <Link
                    href="https://github.com/TheHigherUps"
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    <GitHubIcon className={styles.headerIcon} />
                </Link>
            </nav>
            {mobileOpen ? <MobileNav mobileOpen={mobileOpen} /> : null}
        </header>
    )
}

function MobileNav(props) {
    const mobileOpen = props.mobileOpen
    const router = useRouter()
    return (
        <>
            <div className={styles.mobileNavigation}>
                <nav aria-hidden={!mobileOpen}>
                    <Link
                        href="/"
                        className={
                            router.pathname == "/" ? styles.activeLink : null
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={
                            router.pathname == "/about"
                                ? styles.activeLink
                                : null
                        }
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className={
                            router.pathname == "/projects"
                                ? styles.activeLink
                                : null
                        }
                    >
                        Projects
                    </Link>
                </nav>
            </div>
        </>
    )
}
