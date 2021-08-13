const { Github } = require("../dist");
const github = new Github();
github.getUser("tyizo").then((user) => {
  console.log(user);
});

/** returns: 
{
  name: 'tyizo',
  bio: '🤥 undifined value !!!',
  followers: 3,
  following: 92,
  location: 'Mars.',
  avatarURL: 'https://avatars.githubusercontent.com/u/69811071?v=4',
  company: 'CEO of nothing actually.',
  twitterUsername: '1xm0d',
  repos: 29,
  website: 'https://www.buymeacoffee.com/tyizo',
  createdAt: '2020-08-17T16:22:55Z',
  lastUpdate: '2021-08-11T09:23:36Z'
}   
 */
