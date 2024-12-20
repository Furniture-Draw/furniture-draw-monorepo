import styles from './navigation.module.css';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="http://localhost:3000"><img src="https://www.mobilyaplan.app/_astro/mp-logo.BgqaTz0E.png" alt="Rıfat Srgın" width={120} />  </Link>
      </div>
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <Link href="http://localhost:3000" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Pricing</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>About</Link>
        </li>
      </ul>
      <div className={styles.authButtons}>
        <Link href="http://localhost:3000/login" className={styles.loginButton}>Login</Link>
       
      </div>
    </div>
  </nav>
  );
}

export default Navigation;
