import * as styles from "./TechUsed.module.css";

export default function TechUsed() {
  return (
    <div className={styles.techUsed}>
      <h1 className={styles.label}>Tech Used</h1>

      <div className={styles.tech}>
        <img
          src="https://cdn.svgporn.com/logos/html-5.svg"
          alt="HTML5"
          width="90"
        />

        <img
          src="https://cdn.svgporn.com/logos/css-3.svg"
          alt="CSS3"
          width="90"
        />

        <img
          src="https://cdn.svgporn.com/logos/javascript.svg"
          alt="JavaScript"
          width="90"
        />

        <img
          src="https://cdn.svgporn.com/logos/typescript.svg"
          alt="TypeScript"
          width="90"
        />

        <img
          src="https://cdn.svgporn.com/logos/python.svg"
          alt="Python"
          width="90"
        />

        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="React"
          width="90"
        />

        <img src="https://cdn.svgporn.com/logos/go.svg" alt="Go" width="90" />

        <img
          src="https://cdn.svgporn.com/logos/redis.svg"
          alt="Redis"
          width="90"
        />
      </div>
    </div>
  );
}
