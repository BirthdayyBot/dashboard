export default function TimeZoneComponent({ timezone }: { timezone: number }): JSX.Element {
	return (
		<div className="timeZoneComponent">
			<label className="label">
				<span className="label-text font-sub-heading">Timezone</span>
			</label>
			<div className="join">
				<button className="btn join-item btn-outline" disabled>
					UTC
				</button>
				<input
					className="input input-bordered join-item w-full max-w-xs "
					placeholder="Timezone"
					type="number"
					max={12}
					min={-11}
					defaultValue={timezone}
				/>
			</div>
		</div>
	);
}
