import { BRAND_COLOR } from '@lib/environment';
import TryoutPage from './tryout/page';

export default function HomePage() {
	return (
		<main className="homePage">
			<h1 className={`is-size-1 is-color-primary`}>Welcome to Birthdayy</h1>
			<button className="button is-danger ">Button</button>
			{BRAND_COLOR}
			{process.env.BRAND_COLOR}

			<TryoutPage />
			<p className="font-heading">Heading</p>
			<p className="font-sub-heading">SubHEading</p>
			<p className="font-body">Body</p>
			<p className="">Normal</p>
		</main>
	);
}
