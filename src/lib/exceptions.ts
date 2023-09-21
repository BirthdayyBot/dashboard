export class AuthRequiredError extends Error {
	constructor(message = 'Authentication is required to access this page.') {
		super(message);
		this.name = 'AuthRequiredError';
	}
}

export class GuildNotFoundError extends Error {
	public guildId: string;
	constructor(guildId: string, message = 'Guild not found.') {
		super(message);
		this.name = 'GuildNotFoundError';
		this.guildId = guildId;
	}
}

export class ChannelNotFoundError extends Error {
	public channelId: string;
	constructor(channelId: string, message = 'Channel not found.') {
		super(message);
		this.name = 'ChannelNotFoundError';
		this.channelId = channelId;
	}
}
