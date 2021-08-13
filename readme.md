## Github Scapper

get info about any user/repository you want!

## Installation :

- By Npm :
  `npm i tyizo-github-scapper`
- By Yarn :
  `yarn add tyizo-github-scapper`

## Example:

```js
const { Github } = require("tyizo-github-scapper");
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

- For more examples go to <a href="./examples">examples</a> file.

## Methods:

- `getUser()`:
  For getting user's info such as company, followers etc ..
  Take one args and it's username, must be a string.

- `getRepo()`:
  For getting user's repository info any repo you want.
  Take two args and it's username and repository name, must be a string too.

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

- For Repository:

```ts
interface Repository {
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

Made By Tyizo, under MIT license.
