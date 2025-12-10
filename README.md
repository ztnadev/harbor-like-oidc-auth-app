# Harbor Registry - OIDC Authentication with Okta

A modern container registry interface inspired by Harbor, featuring OpenID Connect (OIDC) authentication with Okta IdP.

## Features

- OpenID Connect authentication with Okta
- Refresh token support using `offline_access` scope
- Harbor-inspired user interface
- Dashboard with statistics and activity monitoring
- Project and repository management
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js 18+ and npm
- An Okta account (free developer account available at https://developer.okta.com)

## Okta Setup

### 1. Create an Okta Application

1. Log in to your Okta Admin Console
2. Navigate to **Applications** > **Applications**
3. Click **Create App Integration**
4. Select **OIDC - OpenID Connect** as the sign-in method
5. Select **Single-Page Application** as the application type
6. Click **Next**

### 2. Configure Application Settings

Configure the following settings:

- **App integration name**: Harbor Registry (or your preferred name)
- **Grant type**:
  - ✅ Authorization Code
  - ✅ Refresh Token (this enables `offline_access` scope)
- **Sign-in redirect URIs**:
  - `http://localhost:5173/callback`
- **Sign-out redirect URIs**:
  - `http://localhost:5173`
- **Controlled access**: Select who can access this application

Click **Save**

### 3. Get Your Credentials

After creating the application, note the following from the **General** tab:

- **Client ID**: You'll need this for configuration
- **Okta domain**: Found in the top-right corner (e.g., `dev-12345.okta.com`)

Your **Authority URL** will be: `https://your-domain.okta.com/oauth2/default`

## Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Edit the `.env` file with your Okta credentials:

```env
VITE_OKTA_AUTHORITY=https://your-domain.okta.com/oauth2/default
VITE_OKTA_CLIENT_ID=your-client-id-here
VITE_OKTA_REDIRECT_URI=http://localhost:5173/callback
VITE_OKTA_POST_LOGOUT_REDIRECT_URI=http://localhost:5173
```

Replace:
- `your-domain.okta.com` with your actual Okta domain
- `your-client-id-here` with your Client ID from Okta

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Authentication Flow

The application implements the Authorization Code flow with PKCE (Proof Key for Code Exchange):

1. User clicks "Sign in with Okta"
2. Redirects to Okta login page
3. User authenticates with Okta credentials
4. Okta redirects back to the application with an authorization code
5. Application exchanges the code for tokens (including refresh token)
6. User is authenticated and can access the application

### Scopes Requested

- `openid`: Required for OIDC authentication
- `profile`: Access to user profile information
- `email`: Access to user email
- `offline_access`: Enables refresh token for extended sessions

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **react-oidc-context** - OIDC authentication
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx   # Main dashboard view
│   ├── Header.tsx      # Top navigation bar
│   ├── Login.tsx       # Login page
│   ├── Loading.tsx     # Loading screen
│   ├── Projects.tsx    # Projects management
│   ├── Repositories.tsx # Repository listing
│   ├── Sidebar.tsx     # Side navigation
│   └── PlaceholderView.tsx # Placeholder for unimplemented views
├── config/
│   └── oidc.ts         # OIDC configuration
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Troubleshooting

### Authentication Errors

- Verify your Okta domain and Client ID are correct in `.env`
- Ensure the redirect URIs in Okta match exactly
- Check that the Authorization Server is active in Okta

### Refresh Token Not Working

- Verify "Refresh Token" is enabled in your Okta application settings
- Ensure `offline_access` scope is included in the OIDC configuration

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (18+ required)

## License

MIT
