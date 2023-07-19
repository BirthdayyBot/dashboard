import { getUserGuilds } from '@lib/utils/oauth';
import { getServerSession } from '@lib/utils/serverSession';
import { BitField, enumToObject } from '@sapphire/bitfield';
import { PermissionFlagsBits } from 'discord-api-types/v10';
import GuildsDisplay from './GuildsDisplay';

export default async function GuildsPage() {
	const session = await getServerSession();
	if (!session) return <div>Session not found</div>;
	const guilds = await getUserGuilds(session?.secrets.accessToken);

	const guildsWithManagePermission = guilds.filter((guild) => {
		if (!guild.permissions) return false;
		const p: bigint = BigInt(guild.permissions);
		const PermissionsBitField = new BitField(enumToObject(PermissionFlagsBits));
		const hasManageGuild =
			PermissionsBitField.has(p, PermissionFlagsBits.Administrator) || PermissionsBitField.has(p, PermissionFlagsBits.ManageGuild);

		return hasManageGuild;
	});

	// const guildsWithManagePermission = GuildsMock;
	// const guild = guildsWithManagePermission[2];

	return (
		<>
			<h1>GUILDS</h1>
			<GuildsDisplay guilds={guildsWithManagePermission} />
			<br />
			<br />
			{JSON.stringify(guildsWithManagePermission, null, 2)}
		</>
	);
}
