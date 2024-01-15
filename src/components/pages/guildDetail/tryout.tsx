'use client';

export default function TestComponent(params: { guildId: string }) {
	// const handleClick = async () => {
	// 	const isManageable = await isGuildManageable(params.guildId);
	// 	console.log(isManageable);
	// };

	// const handleButtonClick = () => {
	// 	handleClick().catch(() => {});
	// 	// Since this function doesn't explicitly return anything, it returns `void`
	// };

	const handleButtonClick = () => {
		console.log('TestComponent ~ guildId:', params.guildId);
	};

	return (
		<div>
			<h1>Test</h1>
			<button className="btn btn-primary" onClick={handleButtonClick}>
				Time
			</button>
		</div>
	);
}
