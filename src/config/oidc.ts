import { AuthProviderProps } from 'react-oidc-context';

export const oidcConfig: AuthProviderProps = {
  authority: import.meta.env.VITE_OKTA_AUTHORITY,
  client_id: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_OKTA_REDIRECT_URI,
  post_logout_redirect_uri: import.meta.env.VITE_OKTA_POST_LOGOUT_REDIRECT_URI,
  scope: 'openid profile email offline_access',
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};
