import { GuildsMock } from '@lib/mock/guilds.mock';
import { getServerSession } from '@lib/utils/serverSession';
import GuildsDisplay from './GuildsDisplay';
// import { BitField, enumToObject } from '@sapphire/bitfield';
// import { PermissionFlagsBits } from 'discord-api-types/v10';

export default async function GuildsPage() {
	const session = await getServerSession();
	if (!session) return <div>Session not found</div>;
	// const guilds = await getUserGuilds(session?.secrets.accessToken);

	// const guildsWithManagePermissions = guilds.filter((guild) => {
	// 	if (!guild.permissions) return false;
	// 	const p: bigint = BigInt(guild.permissions);
	// 	const PermissionsBitField = new BitField(enumToObject(PermissionFlagsBits));
	// 	const hasManageGuild =
	// 		PermissionsBitField.has(p, PermissionFlagsBits.Administrator) || PermissionsBitField.has(p, PermissionFlagsBits.ManageGuild);
	// 	console.log(`guildsWithManagePermissions ~ hasManageGuild [${guild.id}]: `, hasManageGuild);

	// 	return hasManageGuild;
	// });

	const guildsWithManagePermissions = GuildsMock;
	// const guild = guildsWithManagePermissions[2];

	return (
		<>
			<h1>GUILDS</h1>
			<GuildsDisplay guilds={guildsWithManagePermissions} />
			<br />
			<br />
			{JSON.stringify(guildsWithManagePermissions, null, 2)}
		</>
	);
}
