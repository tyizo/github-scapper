export interface Repo {
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
