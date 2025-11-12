import styles from "./Empresa.module.css";

function Empresa() {
  return (
    <div className={styles.empresa}>
      <h1>Sobre a TECNOLOGY S/A</h1>
      <p>
        A <strong>TECNOLOGY S/A</strong> é uma empresa voltada para o desenvolvimento de soluções digitais 
        e tecnológicas que transformam a maneira como pessoas e instituições se conectam ao conhecimento.
      </p>
      <p>
        Atuamos com foco em inovação, automação e acessibilidade, oferecendo sistemas inteligentes 
        e ferramentas digitais que facilitam o aprendizado, a gestão e a comunicação em ambientes educacionais e corporativos.
      </p>
      <p>
        Nosso compromisso é unir tecnologia e propósito, criando experiências que gerem impacto positivo 
        e impulsionem o futuro da educação e dos negócios.
      </p>
    </div>
  );
}

export default Empresa;
