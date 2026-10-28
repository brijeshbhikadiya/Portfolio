export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export async function getRepos(username: string, count: number): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${count + 6}`,
      { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as (Repo & { fork?: boolean })[];
    if (!Array.isArray(data)) return [];
    return data
      .filter((r) => !r.fork)
      .slice(0, count)
      .map((r) => ({
        id: r.id,
        name: r.name,
        html_url: r.html_url,
        description: r.description,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
      }));
  } catch {
    return [];
  }
}
