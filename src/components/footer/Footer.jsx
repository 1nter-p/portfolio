import * as styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        This site was made using React, CSS Modules and JavaScript.
        <br />
        Feel free to copy the design, no need to credit me.
      </p>
    </footer>
  );
}
