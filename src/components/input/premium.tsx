export default function PremiumDisplayComponent({ isPremium }: { isPremium: boolean }) {
	return (
		<div className="join">
			<input type="text" placeholder="Premium" className="input input-bordered w-full max-w-xs join-item" disabled />
			<button className="btn btn-disabled join-item" disabled>
				Premium
			</button>
			<input type="text" placeholder={String(isPremium)} className="input input-bordered w-full max-w-xs join-item" />
		</div>
	);
}
