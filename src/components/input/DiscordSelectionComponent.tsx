'use client';
import { ChangeEvent, useState } from 'react';
import { DiscordSelectionComponentType } from './selectionComponent';

// TODO: #23 Save that something changed in a state and check it if form is saved

export default function DiscordSelectionComponent(params: DiscordSelectionComponentType) {
	const defaultOption: string = params.id === null ? '' : params.id;

	const [selection, setSelection] = useState(defaultOption);
	const [isChanged, setIsChanged] = useState(false);

	function handleSelectionChange(event: ChangeEvent<HTMLSelectElement>): void {
		if (event.target.value === defaultOption) {
			setIsChanged(false);
			setSelection(defaultOption);
		} else {
			setIsChanged(true);
			setSelection(event.target.value);
		}
		return console.log(event.target.value);
	}

	return (
		<div className="DiscordSelectionComponent">
			<div className="form-control w-full max-w-xs pb-3">
				<label className="label">
					<span className="label-text font-sub-heading">{params.label}</span>
				</label>
				<div className="join">
					<select className="select select-bordered join-item" value={selection} onChange={(event) => handleSelectionChange(event)}>
						<option value="" disabled>
							Select a {params.type}
						</option>
						{params.data.map((data) => {
							if (data.id === params.guildId) return null;

							return (
								<option key={data.id} value={data.id}>
									{data.name}
								</option>
							);
						})}
					</select>
					<button className="btn bg-primary join-item" disabled={!isChanged}>
						Save
					</button>
				</div>
				Selection: {selection}
				<br />
				isChanged: {isChanged.toString()}
				<br />
				id: {params.id}
			</div>
		</div>
	);
}
