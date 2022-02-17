import React from "react";

export interface ProjectsProps {
  projects: {
    id: string;
    attributes: {
      title: string;
      description?: string;
      agenturName?: string;
    };
  }[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      {projects ? (
        projects.map((project, key) => {
          return (
            <div key={key}>
              <p>{project.attributes.title}</p>
              {project.attributes.description && (
                <p>{project.attributes.description}</p>
              )}
              {project.attributes.agenturName && (
                <p>{project.attributes.agenturName}</p>
              )}
            </div>
          );
        })
      ) : (
        <div>Fetching failed</div>
      )}
    </div>
  );
};
