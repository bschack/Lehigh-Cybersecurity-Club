import styles from "./homepage.module.scss";

export const Homepage = () => {
  return (
    <div>
      <div className={styles['homepage__section']}>
        <div className={styles['homepage__section-header']} />
      </div>
      <div className={styles['homepage__section']}>
        <div className={styles['homepage__description']}>We are the Lehigh University Cybersecurity Club</div>
      </div>
    </div>
  );
};