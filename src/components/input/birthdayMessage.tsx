export default function BirthdayMessageComponent({
	announcementMessage,
	isPremium
}: {
	announcementMessage: string;
	isPremium: boolean | undefined;
}) {
	return (
		<div className="BirthdayMessageComponent">
			<div className="form-control">
				<label className="label">
					<span className="label-text">Birthday Announcement Message</span>
				</label>

				{!isPremium ? <div className="badge badge-outline badge-error">Premium Only</div> : null}
				<textarea
					className="textarea textarea-bordered h-24"
					placeholder="Birthday Message"
					defaultValue={announcementMessage}
					content={announcementMessage}
					contentEditable={isPremium}
					// disabled={!isPremium}
				></textarea>
			</div>
		</div>
	);
}
