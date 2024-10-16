// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Adote SP</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/animais">Animais</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
