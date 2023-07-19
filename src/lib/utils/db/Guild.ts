import { DEFAULT_ANNOUNCEMENT_MESSAGE } from '@lib/environment';
import { prisma } from '@lib/prisma';
import type { Prisma } from '@prisma/client';

import type { Snowflake } from 'discord-api-types/v10';

export class Guild {
	public get = {
		GuildById: (guildId: string) => prisma.guild.findUnique({ where: { guildId } }),
		GuildsByIds: (guildIds: string[]) => prisma.guild.findMany({ where: { guildId: { in: guildIds } } }),
		GuildsNotInIds: (guildIds: string[]) => prisma.guild.findMany({ where: { guildId: { notIn: guildIds } } }),
		GuildsByTimezone: (guildIds: string[], timezone: number) => prisma.guild.findMany({ where: { guildId: { in: guildIds }, timezone } }),
		GuildsDisabled: (disabled = true) => prisma.guild.findMany({ where: { disabled } }),
		GuildLanguage: (guildId: string) => prisma.guild.findUnique({ where: { guildId }, select: { guildId: true, language: true } }),
		GuildPremium: (guildId: string) => prisma.guild.findUnique({ where: { guildId }, select: { guildId: true, premium: true } }),
		PremiumGuilds: () => prisma.guild.findMany({ where: { premium: true } }),
		GuildDisabled: (guildId: string) => prisma.guild.findUnique({ where: { guildId }, select: { guildId: true, disabled: true } }),
		GuildConfig: (guildId: string) =>
			prisma.guild.findUnique({
				where: { guildId },
				select: {
					guildId: true,
					birthdayRole: true,
					birthdayPingRole: true,
					announcementChannel: true,
					announcementMessage: true,
					overviewChannel: true,
					logChannel: true,
					overviewMessage: true,
					timezone: true,
					language: true,
					premium: true
				}
			}),
		ByLastUpdatedDisabled: (date: Date) =>
			prisma
				.$transaction([
					prisma.birthday.findMany({
						where: { guild: { lastUpdated: { lt: date.toISOString() } }, disabled: true }
					}),
					prisma.guild.findMany({
						where: { lastUpdated: { lt: date.toISOString() }, disabled: true }
					})
				])
				.then(([birthdays, guilds]) => ({
					deletedBirthdays: birthdays.length,
					deletedGuilds: guilds.length
				}))
				.catch((error: any) => {
					console.error(`[Guild][DeleteByLastUpdated] ${JSON.stringify(error)}`);
					return { deletedBirthdays: 0, deletedGuilds: 0 };
				}),
		GuildCount: () => prisma.guild.count({ where: { disabled: false } }),
		GuildAvailableCount: () => prisma.guild.count({ where: { disabled: false } }),
		GuildNotAvailableCount: () => prisma.guild.count({ where: { disabled: true } }),
		GuildTimezone: (guildId: string) => prisma.guild.findUnique({ where: { guildId }, select: { guildId: true, timezone: true } })
	};

	public set = {
		AnnouncementChannel: (guildId: string, channelID: string) =>
			prisma.guild.update({ where: { guildId }, data: { announcementChannel: channelID } }),
		AnnouncementMessage: (guildId: string, message: string) =>
			prisma.guild.update({ where: { guildId }, data: { announcementMessage: message } }),
		OverviewChannel: (guildId: string, channelID: string) => prisma.guild.update({ where: { guildId }, data: { overviewChannel: channelID } }),
		OverviewMessage: (guildId: string, messageID: string) => prisma.guild.update({ where: { guildId }, data: { overviewMessage: messageID } }),
		LogChannel: (guildId: string, channelID: string) => prisma.guild.update({ where: { guildId }, data: { logChannel: channelID } }),
		Timezone: (guildId: string, timezone: number) => prisma.guild.update({ where: { guildId }, data: { timezone } }),
		Language: (guildId: string, language: string) => prisma.guild.update({ where: { guildId }, data: { language } }),
		BirthdayRole: (guildId: string, roleID: string) => prisma.guild.update({ where: { guildId }, data: { birthdayRole: roleID } }),
		BirthdayPingRole: (guildId: string, roleID: string) => prisma.guild.update({ where: { guildId }, data: { birthdayPingRole: roleID } }),
		Premium: (guildId: string, premium: boolean) => prisma.guild.update({ where: { guildId }, data: { premium } })
	};

	public update = {
		DisableGuildAndBirthdays: (guildId: string, disabled: boolean) =>
			prisma.guild.update({
				where: {
					guildId
				},
				data: {
					disabled,
					birthday: {
						updateMany: {
							where: { guildId },
							data: {
								disabled
							}
						}
					}
				},
				include: { birthday: true }
			}),
		ByNotInAndBirthdays: (guildId: string[], disabled: boolean) =>
			prisma.$transaction([
				prisma.guild.updateMany({
					where: {
						guildId: { notIn: guildId }
					},
					data: {
						disabled
					}
				}),
				prisma.birthday.updateMany({
					where: {
						guildId: { notIn: guildId }
					},
					data: {
						disabled
					}
				})
			])
	};

	public delete = {
		GuildByID: (guildId: string) => prisma.guild.delete({ where: { guildId } }),
		ByDisabledGuilds: () => prisma.guild.deleteMany({ where: { disabled: true } })
	};

	public check = {
		isGuildPremium: async (guildId: Snowflake) => {
			const result = await this.get.GuildPremium(guildId);
			if (result === null) {
				return false;
			}
			return result.premium;
		}
	};

	public reset = {
		AnnouncementChannel: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { announcementChannel: null } }),
		AnnouncementMessage: (guildId: Snowflake) =>
			prisma.guild.update({
				where: { guildId },
				data: {
					announcementMessage: DEFAULT_ANNOUNCEMENT_MESSAGE
				}
			}),
		OverviewChannel: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { overviewChannel: null } }),
		OverviewMessage: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { overviewMessage: null } }),
		LogChannel: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { logChannel: null } }),
		Timezone: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { timezone: 0 } }),
		Language: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { language: 'en-US' } }),
		BirthdayRole: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { birthdayRole: null } }),
		BirthdayPingRole: (guildId: Snowflake) => prisma.guild.update({ where: { guildId }, data: { birthdayPingRole: null } })
	};

	public create = (data: Prisma.GuildCreateInput) => prisma.guild.create({ data });
}
