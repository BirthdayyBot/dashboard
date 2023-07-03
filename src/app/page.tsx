import styles from "@/styles/components/main.module.scss";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} is-size-1 is-color-primary`}>
        Welcome to Birthdayy
      </h1>
      <button className="button is-danger ">Button</button>
    </main>
  );
}
