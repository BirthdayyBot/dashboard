import { getUserGuilds } from '@lib/utils/oauth';

export default async function GuildsViewComponent({ accessToken }: { accessToken: string }): Promise<JSX.Element> {
	const guilds = await getUserGuilds(accessToken);
	console.log('DashPage ~ guilds:', guilds);

	return (
		<>
			<h1>GUILDS</h1>
		</>
	);
}
