import * as styles from "./Profile.module.css";

export default function Profile({ imgUrl, name, description }) {
  return (
    <div className={styles.profile}>
      <img src={imgUrl} alt={name} className={styles.avatar} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
