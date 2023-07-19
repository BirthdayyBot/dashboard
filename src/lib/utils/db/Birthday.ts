import { prisma } from '@lib/prisma';
import type { Dayjs } from 'dayjs';
import type { APIUser } from 'discord-api-types/v10';

export class Birthday {
	public get = {
		BirthdaysByDate: (date: Dayjs) => prisma.birthday.findMany({ where: { birthday: { contains: date.format('-MM-DD') } } }),
		BirthdayByDateAndTimezone: (date: Dayjs, timezone: number) =>
			prisma.birthday.findMany({
				where: { birthday: { contains: date.format('-MM-DD') }, guild: { timezone } }
			}),
		BirthdayByDateTimezoneAndGuild: (date: Dayjs, timezone: number, guildId: string) => {
			return prisma.birthday.findMany({
				where: { birthday: { contains: date.format('-MM-DD') }, guild: { timezone, guildId } }
			});
		},
		BirthdaysByGuildId: (guildId: string) => prisma.birthday.findMany({ where: { guildId } }),
		BirthdayByUserAndGuild: (guildId: string, userId: string) =>
			prisma.birthday.findUnique({
				where: { userId_guildId: { guildId, userId } }
			}),
		BirthdaysNotDisabled: (guildId: string) => prisma.birthday.findMany({ where: { guildId, disabled: false } }),
		BirthdayCountByGuildId: (guildId: string) => prisma.birthday.count({ where: { guildId, disabled: false } }),
		BirthdayAvailableCount: () => prisma.birthday.count({ where: { disabled: false } }),
		BirthdayNotAvailableCount: () => prisma.birthday.count()
	};

	public update = {
		BirthdayDisabled: (guildId: string, userId: string, disabled: boolean) =>
			prisma.birthday.update({
				where: { userId_guildId: { guildId, userId } },
				data: { disabled }
			}),
		BirthdayByUserAndGuild: (guildId: string, userId: string, birthday: string) =>
			prisma.birthday.update({
				where: { userId_guildId: { guildId, userId } },
				data: { birthday }
			})
	};

	public delete = {
		GuildById: (guildId: string) => prisma.guild.delete({ where: { guildId } }),
		ByDisabledGuilds: () => prisma.guild.deleteMany({ where: { disabled: true } }),
		ByGuildAndUser: (guildId: string, userId: string) => prisma.birthday.delete({ where: { userId_guildId: { guildId, userId } } })
	};

	public create = (birthday: string, guildId: string, user: APIUser) =>
		prisma.birthday.create({
			data: {
				birthday,
				guild: {
					connectOrCreate: {
						create: { guildId },
						where: { guildId }
					}
				},
				user: {
					connectOrCreate: {
						create: {
							userId: user.id,
							discriminator: user.discriminator,
							username: user.username
						},
						where: {
							userId: user.id
						}
					}
				}
			}
		});
}
