import fetch from "node-fetch";
import { User } from "../interfaces/User";
import { Repo } from "../interfaces/Repo";

export default class Github {
  /**
   * @param username Username to scrape, must be string
   * @returns Info about username
   */
  public async getUser(username: string): Promise<User> {
    if (typeof username !== "string") {
      throw new TypeError(
        `[Github Scapper] username must be string: ${username}`
      );
    }
    return this._getData(username);
  }
  /**
   * @param username Username to scrape, must be string
   * @param repoName Repo name to scrape, must be string
   * @returns Info about username & repo
   */
  public async getRepo(username: string, repoName: string): Promise<Repo> {
    if (typeof username !== "string") {
      throw new TypeError(
        `[Github Scapper] username must be string: ${username}`
      );
    }
    if (typeof repoName !== "string") {
      throw new TypeError(
        `[Github Scapper] repo name must be string: ${repoName}`
      );
    }

    return this._getUserRepoData(username, repoName);
  }
  public async getRepos() {}

  // Private functions

  // getting username's info
  private async _getData(username: string): Promise<any> {
    try {
      const data: any = {};
      const req = await fetch(`https://api.github.com/users/${username}`);
      if (req.status !== 200) return;
      let res = await req.json();
      const name = res.login;
      const avatarURL = res.avatar_url;
      const company = res.company;
      const location = res.location;
      const twitterUsername = res.twitter_username;
      const repos = res.public_repos;
      const followers = res.followers;
      const following = res.following;
      const bio = res.bio;
      const website = res.blog;
      const createdAt = res.created_at;
      const lastUpdate = res.updated_at;
      Object.assign(data, {
        name,
        bio,
        followers,
        following,
        location,
        avatarURL,
        company,
        twitterUsername,
        repos,
        website,
        createdAt,
        lastUpdate,
      });

      return data;
    } catch (error) {
      console.log(`[Github Scapper] Error: ${error}`);
    }
  }

  // getting username's repo info
  private async _getUserRepoData(
    username: string,
    repoName: string
  ): Promise<any> {
    try {
      const data: any = {};
      const req = await fetch(
        `https://api.github.com/repos/${username}/${repoName}`
      );
      if (req.status !== 200) return;
      if (!repoName) {
        return console.log("[Github Scapper] Please enter a repo name.");
      }
      let res = await req.json();
      const name = res.name;
      const description = res.description;
      const owner = res.owner.login;
      const isPrivate = res.private;
      const repoURL = res.html_url;
      const stars = res.stargazers_count;
      const forks = res.forks_count;
      const homepage = res.homepage;
      const language = res.language;
      const createdAt = res.created_at;
      const lastUpdate = res.updated_at;
      Object.assign(data, {
        name,
        description,
        owner,
        isPrivate,
        repoURL,
        stars,
        forks,
        homepage,
        language,
        createdAt,
        lastUpdate,
      });
      return data;
    } catch (error) {
      console.log(`[Github Scapper] Error: ${error}`);
    }
  }
}
