import { prisma } from '@lib/prisma';

export class User {
	public get = {
		UserById: (userId: string) => prisma.user.findUnique({ where: { userId } }),
		UserCount: () => prisma.user.count()
	};
}
