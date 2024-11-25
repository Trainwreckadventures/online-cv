function Projects({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            See Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
