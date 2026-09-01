import Image from "next/image";
import hero from "../public/hero/hero.png";
import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={css.heroWrapper}>
      <Image
        className={css.heroImage}
        src={hero}
        alt="Travel Trucks for you"
        priority
        fill
        sizes="100vw"
      />
      <div className={css.heroInfo}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <h2 className={css.heroDescription}>
          You can find everything you want in our catalog
        </h2>
        <Link href="/catalog" className={css.heroLink}>
          View Now
        </Link>
      </div>
    </div>
  );
}
