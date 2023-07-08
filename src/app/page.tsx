import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/logo2.png"
          alt="Next.js Logo"
          width={500}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
