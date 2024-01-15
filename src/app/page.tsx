import Heading from '@components/typography/Heading';
import SubHeading from '@components/typography/SubHeading';
import Text from '@components/typography/Text';
import { BRAND_COLOR, DISCORD_BOT_NAME, DISCORD_CLIENT_ID } from '@lib/environment';
import TryoutPage from './tryout/page';

export default function HomePage() {
	return (
		<main className="homePage">
			<Heading heading={1} className={`color-primary`}>
				Welcome to Birthdayy
			</Heading>

			<Text>BrandColor: {BRAND_COLOR}</Text>
			<Text>BotName: {DISCORD_BOT_NAME}</Text>
			<Text>BotID: {DISCORD_CLIENT_ID}</Text>

			<TryoutPage />
			<Heading heading={1}>Heading 1</Heading>
			<Heading heading={2}>Heading 2</Heading>
			<Heading heading={3}>Heading 3</Heading>
			<Heading heading={4}>Heading 4</Heading>
			<SubHeading>SubHEading</SubHeading>
			<Text>Text</Text>
			<p>Body</p>
		</main>
	);
}
