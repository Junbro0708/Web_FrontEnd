import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar(){
  const router = useRouter();
  return <nav className={styles.nav}>
    <Link href="/" legacyBehavior><a className={router.pathname === "/" ? styles.active : ""}>Home</a></Link>
    <Link href="/about" legacyBehavior><a className={router.pathname === "/about" ? styles.active : ""}>About</a></Link>
    <Link href="/contact" legacyBehavior><a className={router.pathname === "/contact" ? styles.active : ""}>Contact</a></Link>
  </nav>
}