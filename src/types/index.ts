export interface Project {
  id: string;
  name: string;
  public: boolean;
  repoCount: number;
  createdAt: string;
  description: string;
}

export interface Repository {
  id: string;
  name: string;
  projectId: string;
  pullCount: number;
  tagCount: number;
  updatedAt: string;
}
