import { TinifyLogo } from "@/assets/tinify/tinifyLogo";
import Link from "next/link";
import { NavLink } from "./components/navLink/navLink";
import styles from "./css/navbar.module.css";
import { NAV_LINKS } from "./navContent";
export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link className={styles.logoLink} href={"/"}>
        <TinifyLogo className={styles.logo} />
      </Link>

      <nav>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((navItem) => (
            <NavLink
              className={styles.navLink}
              href={navItem.url}
              key={navItem.name}
              linkName={navItem.name}
              linkPath={navItem.url}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
