import ProjectCard from "./project-card";
import * as styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      <h1 className={styles.label}>Projects</h1>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
