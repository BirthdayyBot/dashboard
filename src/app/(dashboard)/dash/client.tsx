'use client';

export default function Client({ message, children }: { message: string; children: React.ReactNode }) {
	console.log('Client component rendering');

	return (
		<div>
			<h2>Client Child</h2>
			<p>Message from parent: {message}</p>
			<div className="box-red">{children}</div>
		</div>
	);
}
