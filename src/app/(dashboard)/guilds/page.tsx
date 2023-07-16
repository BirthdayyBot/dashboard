import { getUserGuilds } from '@lib/utils/oauth';
import { getServerSession } from '@lib/utils/serverSession';
import { BitField, enumToObject } from '@sapphire/bitfield';
import { PermissionFlagsBits } from 'discord-api-types/v10';

export default async function GuildsPage() {
	const session = await getServerSession();
	if (!session) return <div>Session not found</div>;
	const guilds = await getUserGuilds(session?.secrets.accessToken);
	console.log('DashPage ~ guilds:', guilds);

	const guildsWithManagePermissions = guilds.filter((guild) => {
		if (!guild.permissions) return false;
		const p: bigint = BigInt(guild.permissions);
		const PermissionsBitField = new BitField(enumToObject(PermissionFlagsBits));
		const hasManageGuild =
			PermissionsBitField.has(p, PermissionFlagsBits.Administrator) || PermissionsBitField.has(p, PermissionFlagsBits.ManageGuild);
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
