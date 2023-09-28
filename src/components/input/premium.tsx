export default function PremiumDisplayComponent({ isPremium }: { isPremium: boolean }) {
	return (
		<div className="PremiumDisplayComponent">
			<label className="label">
				<span className="label-text font-sub-heading">Premium</span>
			</label>
			<div className="join">
				<button className="btn btn-disabled join-item" disabled>
					Premium
				</button>
				<input type="text" placeholder={String(isPremium)} className="input input-bordered join-item" disabled />
			</div>
		</div>
	);
}
