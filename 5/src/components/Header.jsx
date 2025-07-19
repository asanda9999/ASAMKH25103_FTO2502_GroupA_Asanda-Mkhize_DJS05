import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={styles.appHeader}>
      {!isHome && (
        <Link to="/" className={styles.backButton} aria-label="Back to Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="11" />
            <polyline points="14.5 8 10.5 12 14.5 16" />
          </svg>
        </Link>
      )}
      <h1>🎙️ PodcastApp</h1>
    </header>
  );
}
