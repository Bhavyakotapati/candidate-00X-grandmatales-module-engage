import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Grandmatales</h1>
      <p>Explore the pages:</p>
      <ul>
        <li><a href="/terms">Terms</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/optout">Opt‑Out</a></li>
        <li><a href="/engage">Post‑Purchase Engagement</a></li>
      </ul>
    </div>
  );
}