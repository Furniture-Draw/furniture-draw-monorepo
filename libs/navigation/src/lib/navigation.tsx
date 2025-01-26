import { useState } from 'react';
import styles from './navigation.module.css';
import Link from 'next/link';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="http://localhost:3000">
            <img
              src="https://www.mobilyaplan.app/_astro/mp-logo.BgqaTz0E.png"
              alt="Rıfat Srgın"
              width={120}
            />{' '}
          </Link>
        </div>
        <div className={styles.navbarToggle} onClick={toggleMenu}>
          <div className={styles.toggleBar}></div>
          <div className={styles.toggleBar}></div>
          <div className={styles.toggleBar}></div>
        </div>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="http://localhost:3000" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/features" className={styles.navLink}>
              Features
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Pricing
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="http://localhost:3000/blog" className={styles.navLink}>
              Blog
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <Link
            href="http://localhost:3000/login"
            className={styles.loginButton}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
