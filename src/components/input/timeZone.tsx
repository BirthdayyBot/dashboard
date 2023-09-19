export default function TimeZoneComponent({ timezone }: { timezone: number }): JSX.Element {
	return (
		<div className="timeZoneComponent">
			<div className="join">
				<button className="btn join-item" disabled>
					UTC
				</button>
				<input className="input input-bordered join-item" placeholder="Timezone" type="number" max={12} min={-11} defaultValue={timezone} />
			</div>
		</div>
	);
}
