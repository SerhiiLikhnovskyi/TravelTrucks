"use client";
import css from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className={css.container}>
      <div className={css.logoWrapper}>
        <Link href="/" className={css.logo}>
          <Image src="/Logo.svg" alt="Logo" priority width={136} height={16} />
        </Link>
      </div>
      <nav className={css.headerNav}>
        <ul className={css.navList}>
          <li>
            <Link
              href="/"
              className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={`${css.navLink} ${pathname === "/catalog" ? css.active : ""}`}
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
