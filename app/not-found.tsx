import Image from "next/image";
import css from "./NoteFound.module.css";

export default function NotFound() {
  return (
    <>
      <div className={css.container}>
        <div className={css.image}>
          <Image
            src="/NoCampers.png"
            alt="Travel Trucks for you"
            width={488}
            height={463}
          />
          <h1 className={css.title}>404 - Page not found</h1>
          <p className={css.description}>
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </>
  );
}
