export default function BirthdayMessageComponent({
	announcementMessage,
	isPremium
}: {
	announcementMessage: string;
	isPremium: boolean | undefined;
}) {
	// isPremium = false;
	return (
		<div className="BirthdayMessageComponent">
			<div className="form-control">
				<label className="label">
					<span className="label-text">Birthday Announcement Message</span>
				</label>
				{isPremium ? null : <div className="badge badge-outline badge-error">Premium Only</div>}
				<textarea
					className="textarea textarea-bordered h-24"
					placeholder="Birthday Message"
					defaultValue={announcementMessage}
					content={announcementMessage}
					disabled={!isPremium}
					maxLength={512}
					style={{ resize: 'none' }}
				></textarea>
			</div>
		</div>
	);
}
