'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export const ProfilePicture = ({
	size = 256,
	avatarSize = 128
}: {
	avatarSize?: 16 | 24 | 32 | 48 | 64 | 96 | 128;
	size?: number;
}): React.ReactNode => {
	const { data: session } = useSession();
	return (
		<figure className={`image is-${avatarSize}x${avatarSize}`}>
			<Image
				className="is-rounded"
				src={session?.user.imageUrl ? `${session?.user?.imageUrl}?size=${size}&q=100` : '/me.png'}
				alt="Profile Picture"
				width={size}
				height={size}
			/>
		</figure>
	);
};
