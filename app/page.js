import styles from "./styles/components/main.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={`${styles.description} is-size-1`}>
				Welcome to Birthdayy
			</h1>
			<button class="button is-danger">Button</button>
		</main>
	);
}
