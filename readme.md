## Github Scapper

get info about any user/repo you want!

## Installation :

- By Npm :
  `npm i github-scapper`
- By Yarn :
  `yarn add github-scapper`

## Example:

```js
const { Github } = require("github-scapper");
const github = new Github();
// get user's info
github.getUser("tyizo").then((user) => {
  console.log(user);
});
// get user's repo info
github.getRepo("facebook", "react").then((repo) => {
  console.log(repo);
});
```

## Methods:

- `getUser()`:
  For getting user's info such as company, followers etc ..
  Take one args and it's username, must be a string.

- `getRepo()`:
  For getting user's repo info any repo you want.
  Take two args and it's username and repoName, must be a string too.

## Responses:

- For Username:

```ts
interface User {
  name: string;
  company: string;
  location: string;
  twitterUsername: string;
  repos: number;
  followers: number;
  following: number;
  createdAt: Date;
  lastUpdate: Date;
  avatarURL: URL;
  bio: string;
  website: URL;
}
```

- For Repo:

```ts
interface Repo {
  name: string;
  description: string;
  owner: string;
  private: boolean;
  repoURL: URL;
  stars: number;
  forks: number;
  homepage: URL;
  language: string;
  createdAt: Date;
  lastUpdate: Date;
}
```

## License:

Made By Tyizo, this repo is under MIT license.
