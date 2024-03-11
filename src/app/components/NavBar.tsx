import styles from './NavBar.module.css';
import Link from 'next/link';

const NavBar = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <a>Inicio</a>
    </Link>
    <Link href="/projects">
      <a>Proyectos</a>
    </Link>
    <Link href="/contact">
      <a>Contacto</a>
    </Link>
    {/* Añade más enlaces si es necesario */}
  </nav>
);

export default NavBar;