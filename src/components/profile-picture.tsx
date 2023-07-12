'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export const ProfilePicture = ({ size }: { size: number }) => {
	const { data: session } = useSession();
	return (
		<figure className="image is-128x128">
			<Image
				className="is-rounded"
				src={session?.user?.imageUrl ?? 'https://bulma.io/images/placeholders/256x256.png'}
				alt="Profile Picture"
				width={size}
				height={size}
			/>
		</figure>
	);
};

ProfilePicture.defaultProps = {
	size: 128
};
