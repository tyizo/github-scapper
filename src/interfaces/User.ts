export interface User {
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
