import { prisma } from '@lib/prisma';

export default async function TestPage() {
	console.log(process.env.DATABASE_URL);
	const birthday = await prisma.birthday.findFirst({
		where: {
			userId: '267614892821970945'
		}
	});
	return (
		<div>
			<div>TestPage</div>
			<p>{JSON.stringify(birthday?.birthday)}</p>
		</div>
	);
}
