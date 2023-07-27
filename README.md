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

Now, your `.env.local` file should look like this (**These specific values will not work, follow the instructions to create your own secrets**):

```txt
NEXTAUTH_SECRET=/718oFIyV0UEXfuPNZOvPs1mm/Gx+T8D5NZ0WK39/cQ=
GITHUB_ID=3c897123809b1290301aa
GITHUB_SECRET=eca8123891982379as9d878sa6d79z
```

### Run the backend

Run the backend (see the backend repository for more information on this). Then, in a separate terminal, run the frontend by executing:

```bash
npm run dev
```

from the frontend root directory.

## Tech stack

- Next.js

# Guide for Developers

## Making GraphQL requests in Server Components

Consider an example where the component `MyComponent` wants to query all user projects. The query is fedined in `@/graphql/queries/Project.graphql` and is imported.

Then, we can execute the query in an async server component as follows:

```ts
import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { GetUserProjects } from "@/graphql/queries/Project.graphql";

async function MyComponent() {
  // REQUEST THAT DOES NOT REQUIRE AUTHORIZATION HEADER
  const res = await getClient().query({
    query: GetUserProjects,
  });

  // REQUEST THAT REQUIRES AUTHORIZATION HEADER
  const res = await getClient().query({
    query: GetUserProjects,
    context: await getAuthContext(),
  });

  return (
    <>
      <div>Component that uses data goes here...</div>
    </>
  );
}
```
