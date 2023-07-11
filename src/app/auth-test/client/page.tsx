'use client';

import { UrlSlugEnum } from '@lib/enum/url-slug.enum';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function ClientPage() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect(`${UrlSlugEnum.LOGIN}?callbackUrl=/client`);
		}
	});
	return <h1>{session?.user.userId}</h1>;
}
