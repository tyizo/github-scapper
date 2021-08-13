import fetch from "node-fetch";
import { User } from "../interfaces/User";
import { Repository } from "../interfaces/Repository";

export default class Github {
  /**
   * @param username Username to scrape, must be string
   * @returns Info about username
   */
  public async getUser(username: string): Promise<User> {
    if (typeof username !== "string") {
      return this.reiseError(`Username must be string: ${username}`);
    }
    return this._getData(username);
  }
  /**
   * @param username Username to scrape, must be string
   * @param repository Repo name to scrape, must be string
   * @returns Info about username & repo
   */
  public async getRepo(
    username: string,
    repository: string
  ): Promise<Repository> {
    if (typeof username !== "string") {
      return this.reiseError(`Username must be string: ${username}`);
    }
    if (typeof repository !== "string") {
      return this.reiseError(`Repo name must be string: ${username}`);
    }

    return this._getUserRepoData(username, repository);
  }

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
        twitterUsername: `@${twitterUsername}`,
        repos,
        website,
        createdAt,
        lastUpdate,
      });

      return data;
    } catch (error) {
      return this.reiseError(error);
    }
  }

  // getting username's repo info
  private async _getUserRepoData(
    username: string,
    repository: string
  ): Promise<any> {
    try {
      const data: any = {};
      const req = await fetch(
        `https://api.github.com/repos/${username}/${repository}`
      );
      if (req.status !== 200) return;
      if (!repository) {
        return this.reiseError("Please enter repo name to scrape.");
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
      return this.reiseError(error);
    }
  }
  // for handling errors
  private reiseError(errorMessage: string): never {
    throw new Error(`[Github Scapper] ${errorMessage}`);
  }
}
