export class AuthRequiredError extends Error {
	constructor(message = 'Authentication is required to access this page.') {
		super(message);
		this.name = 'AuthRequiredError';
	}
}

export class GuildNotFoundError extends Error {
	guildId: string;
	constructor(guildId: string, message = 'Guild not found.') {
		super(message);
		this.name = 'GuildNotFoundError';
		this.guildId = guildId;
	}
}
