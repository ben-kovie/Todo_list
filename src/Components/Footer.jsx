import styles from "./footer.module.css";

export default function Footer({ total, uncompleted }) {
  return (
    <div className={styles.footer}>
      <span className={styles.items}> Listed task: {uncompleted} </span>
      <span className={styles.items}>completed task is: {total} </span>
    </div>
  );
}
