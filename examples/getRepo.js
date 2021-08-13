const { Github } = require("../dist");
const github = new Github();
github.getRepo("facebook", "react").then((repo) => {
  console.log(repo);
  // or:
  console.log(`Stars For React Repo: ${repo.stars}`);
});

/** returns: 
{
  name: 'react',
  description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  owner: 'facebook',
  isPrivate: false,
  repoURL: 'https://github.com/facebook/react',
  stars: 172848,
  forks: 34734,
  homepage: 'https://reactjs.org',
  language: 'JavaScript',
  createdAt: '2013-05-24T16:15:54Z',
  lastUpdate: '2021-08-13T09:14:25Z'
}
 */
