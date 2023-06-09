# `database_doctor`

##### Frontend

## About

### A database monitoring tool

`database_doctor` is a project created for CS 348 at the University of Waterloo. More details coming soon.

## Running locally for development

To run the `database_doctor` frontend locally, first follow the instructions to download and run the backend,
which can be found at https://github.com/database-doctor/backend. Then, clone this repository:

```bash
git clone https://github.com/database-doctor/frontend.git
```

### Install all dependencies:

```bash
cd frontend
npm install
```

From the root of the frontend directory (at the same level as `package.json`), create a `.env.local` file to store the secrets required for OAuth.

```bash
touch .env.local
```

### Create a `NEXTAUTH_SECRET`:

Used to encrypt the `NextAuth.js` JWT, and to hash email verification tokens. This is the default value for the secret option in NextAuth and Middleware. You can quickly create a good value on the command line via this `openssl` command:

```bash
openssl rand -base64 32
```

Add this to the `.env.local` file such that it looks like this:

```txt
NEXTAUTH_SECRET=/718oFIyV0UEXfuPNZOvPs1mm/Gx+T8D5NZ0WK39/cQ=
```

### Setting up GitHub OAuth

Required: a GitHub account (free)

1. Navigate to https://github.com/settings/apps
2. Select 'OAuth Apps'
3. Click 'New OAuth App' on the top right
4. Give the application a name (e.g. database-doctors)
5. Set the homepage URL to http://localhost:3000
6. Set the callback URL to http://localhost:3000/api/auth/callback/github
7. Click 'register application'
8. Copy the Client ID and put it into the `.env.local` with variable name `GITHUB_ID`
9. Copy the Client Secret and put it into the `.env.local` with variable name `GITHUB_SECRET`. Please make sure to copy the secret because you won't be able to see it again.

Now, your `.env.local` file should look like this:

```txt
NEXTAUTH_SECRET=/718oFIyV0UEXfuPNZOvPs1mm/Gx+T8D5NZ0WK39/cQ=
GITHUB_ID=3c897123809b1290301aa
GITHUB_SECRET=eca8123891982379as9d878sa6d79z
```

### Run the backend

Run the backend. Then, in a separate terminal, run the frontend by executing:

```bash
npm run dev
```

from the frontend root directory.

## Tech stack

- Next.js
