// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/patasUnidas.png" alt="Patas Unidas" className={styles.logoImage} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
      <li className={styles.logoText}><Link href="/">Patas Unidas</Link></li>
        <li><Link href="/animais">Animais</Link></li>
        <li><Link href="/sobre">Sobre nós</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
