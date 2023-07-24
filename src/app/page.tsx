import styles from "./page.module.css";

import Hero from "@/components/landing/Hero";

import { GetUserByUsername } from "@/graphql/queries/User.graphql";

export default function Home() {
  console.log(GetUserByUsername);
  return (
    <main className={styles.main}>
      <div>
        <Hero />
      </div>
    </main>
  );
}
