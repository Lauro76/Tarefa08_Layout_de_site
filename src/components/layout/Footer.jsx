import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3>Technology S.A © 2025</h3>
        <p>Desenvolvido por:</p>
        <ul>
          <li><strong>Lauro Cobo Junior</strong> — lauro.cobo@etec.sp.gov.br</li>
          <li><strong>Guilherme Bonfim do Santos</strong> — guilherme.santos1641@etec.sp.gov.br</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;


