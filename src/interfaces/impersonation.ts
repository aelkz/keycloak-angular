import { UserInfo } from './user-info';

/**
 * keycloak impersonation api.
 * This feature enable token exchange if the originator user has impersonate role added.
 *
 * Token exchange is the process of using a set of credentials or token to obtain an entirely different token.
 * A client may want to invoke on a less trusted application so it may want to downgrade the current token it has.
 * A client may want to exchange a {project_token} for a token stored for a linked social provider account.
 * You may want to trust external tokens minted by other {project_name} realms or foreign IDPs.
 * A client may have a need to impersonate a user.
 *
 * Documentation:
 * https://github.com/keycloak/keycloak-documentation/blob/master/securing_apps/topics/token-exchange/token-exchange.adoc
 * Based on IEFT - OAuth 2.0 Token Exchange:
 * https://www.ietf.org/id/draft-ietf-oauth-token-exchange-13.txt
 */

/**
 * For use with newer versions of keycloak (3.4.0+) we will use token exchange api.
 * This newest api offers token refresh.
 *
 * For legacy versions, we must have to acquire impersonated user cookies from session.
 * These cookies allow the impersonator a time-limited navigation for at most 15 minutes
 * (keycloak default for implicitly obtained tokens)
 */
export interface Impersonation {

    /**
     * User representation.
     */
    user: UserInfo;

    /**
     * Set to enable/disable current user impersonated state.
     * @default false
     */
    isImpersonated: boolean;

    /**
     * Set uuid of user for being impersonated.
     */
    impersonate(id: string): Promise<boolean>;

    /**
     * Set user representation of the impersonator user.
     */
    setImpersonator(impersonator: UserInfo | null): void;

    /**
     * Get user representation of the impersonator user.
     */
    getImpersonator(): UserInfo;

    /**
     * Revoke the current session of impersonator user.
     * It will force a session user logout.
     */
    revokeImpersonatorSession(): void;
}
