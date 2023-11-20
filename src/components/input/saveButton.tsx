export default function SaveButtonComponent(params: {
	isChanged: boolean;
	guildId: string;
	selectionType: 'channel' | 'role' | 'timezone';
	formValue: string | number;
}) {
	function saveSelection(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		params: { isChanged: boolean; guildId: string; selectionType: 'channel' | 'role' | 'timezone' }
	) {
		event.preventDefault();
		// You can access params.isChanged, params.guildId, and params.selectionType here

		// eslint-disable-next-line no-alert
		alert(`You clicked the save button! with the value (selectionType): ${params.selectionType}`);
	}

	return (
		<>
			<button className="btn bg-primary join-item" disabled={!params.isChanged} onClick={(event) => saveSelection(event, params)}>
				Save
			</button>
		</>
	);
}
