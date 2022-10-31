import * as styles from "./ProjectCard.module.css";

export default function ProjectCard({ name, description, link }) {
  return (
    <div
      className={styles.projectCard}
      onClick={() => (window.location = link)}
    >
      <h3>{name}</h3>
      <p>{description}</p>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
}
