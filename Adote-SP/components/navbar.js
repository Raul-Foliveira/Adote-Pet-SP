import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <li><button onClick={scrollToAboutUs} className={styles.buttonLink}>Sobre nós</button></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
