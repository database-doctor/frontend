import styles from "./page.module.css";

import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Hero />
      </div>
    </main>
  );
}
