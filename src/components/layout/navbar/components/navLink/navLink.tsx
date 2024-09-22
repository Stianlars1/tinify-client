"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./css/navLink.module.css";
export const NavLink = ({
  linkPath,
  linkName,
  className = "",
  href,
}: {
  linkPath: string;
  linkName: string;
  className?: string;
  href: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === linkPath;
  return (
    <Link
      className={`${className} ${styles.navLink} ${
        isActive ? styles.activeLink : ""
      }`}
      href={href}
    >
      {linkName}
    </Link>
  );
};
