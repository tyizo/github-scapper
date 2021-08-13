const { Github } = require("../dist");
const github = new Github();
github.getUser("tyizo").then((user) => {
  console.log(user);
});
github.getRepo("facebook", "react").then((repo) => {
  console.log(repo);
});
