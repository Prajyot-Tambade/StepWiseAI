import { Client, Account, ID } from 'appwrite';

/**
 * AuthService class to handle authentication using Appwrite.
 * Provide methods to 
 * - create a new user account
 * - login
 * - get current user
 * - logout.
 */

class AuthService {
	client = new Client();

	/**
	 * Initializes the AuthService with Appwrite client and account.
	 */
	constructor() {
		this.client
			.setEndpoint(import.meta.env.VITE_APPWRITE_URL)
			.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
		this.account = new Account(this.client);
	}

	/**
	 * Creates a new user account.
	 * @param {Object} param0 - The user details.
	 * @param {string} param0.name - The name of the user.
	 * @param {string} param0.email - The email of the user.
	 * @param {string} param0.password - The password of the user.
	 * @returns {Promise<Object|null>} The user account or null if an error occurs.
	 */
	async createAccount({ name, email, password }) {
		try {
			const userAccount = await this.account.create(email, password);

			if (!userAccount) {
				return userAccount;
			}

			await this.account.updateProfile({ name: name });

			return this.login({ email, password });
		} catch (error) {
			console.log('AuthService :: createAccount :: error', error);
			return null;
		}
	}

	/**
	 * Logs in a user.
	 * @param {Object} param0 - The login details.
	 * @param {string} param0.email - The email of the user.
	 * @param {string} param0.password - The password of the user.
	 * @returns {Promise<void|null>} A promise that resolves when the user is logged in or null if an error occurs.
	 */
	async login({ email, password }) {
		try {
			this.account.createEmailPasswordSession(email, password);
		} catch (error) {
			console.log('AuthService :: login :: error', error);
			return null;
		}
	}

	/**
	 * Access current user.
	 * @returns {Promise<void|null>} A promise that resolves when the user is logged in or null if an error occurs.
	 */
	async getCurrentUser() {
		try {
			return this.account.get();
		} catch (error) {
			console.log('AuthService :: getCurrentUser :: error', error);
			return null;
		}
	}

	/**
	 * Logs out the user from all sessions.
	 * @returns {Promise<void|null>} A promise that resolves when the user is logged out or null if an error occurs.
	 */
	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			console.log('AuthService :: logout :: error', error);
			return null;
		}
	}
}

const authService = new AuthService();
export default authService;
