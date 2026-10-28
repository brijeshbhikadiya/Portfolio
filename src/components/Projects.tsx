import { FeaturedProjects } from "./projects/FeaturedProjects";
import { MoreProjects } from "./projects/MoreProjects";
import { PublishedApps } from "./projects/PublishedApps";
import { GithubRepos } from "./projects/GithubRepos";

export function Projects() {
  return (
    <section id="projects" className="section bg-alt">
      <div className="container-x">
        <FeaturedProjects />
        <MoreProjects />
        <PublishedApps />
        <GithubRepos />
      </div>
    </section>
  );
}
