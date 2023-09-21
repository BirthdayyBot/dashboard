export default function PremiumDisplayComponent({ isPremium }: { isPremium: boolean }) {
	return (
		<div className="join">
			<button className="btn btn-disabled join-item" disabled>
				Premium
			</button>
			<input type="text" placeholder={String(isPremium)} className="input input-bordered join-item" disabled />
		</div>
	);
}
