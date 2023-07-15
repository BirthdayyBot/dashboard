import { getUserGuilds } from '@lib/utils/oauth';
import { getServerSession } from '@lib/utils/serverSession';
import { PermissionsBitField } from 'discord.js';

export default async function GuildsPage() {
	const session = await getServerSession();
	if (!session) return <div>Session not found</div>;
	const guilds = await getUserGuilds(session?.secrets.accessToken);
	console.log('DashPage ~ guilds:', guilds);

	const guildsWithManagePermissions = guilds.filter((guild) => {
		if (!guild.permissions) return false;
		const p: bigint = BigInt(guild.permissions);
		const permissionField = new PermissionsBitField(p);
		const hasManageGuild = permissionField.has('ManageGuild');
		console.log(`guildsWithManagePermissions ~ hasManageGuild [${guild.id}]: `, hasManageGuild);

		return hasManageGuild;
	});

	console.log(guilds.length);
	console.log(guildsWithManagePermissions.length);

	return (
		<>
			<h1>GUILDS</h1>
			{JSON.stringify(guildsWithManagePermissions, null, 2)}
		</>
	);
}
