export class AuthRequiredError extends Error {
	constructor(message = 'Authentication is required to access this page.') {
		super(message);
		this.name = 'AuthRequiredError';
	}
}
