import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>TECNOLOGY/S.A</h1>
      </div>

      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;
