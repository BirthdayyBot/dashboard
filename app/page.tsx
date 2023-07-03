import styles from "./styles/components/main.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.t} is-size-1`}>Welcome to Birthdayy</h1>
      <button className="button is-danger">Button</button>
    </main>
  );
}
