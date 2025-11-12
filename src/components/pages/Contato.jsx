export default function Contato() {
  return (
    <div className="contato">
      <h1 className="titulo">Contatos</h1>
      <p className="descricao">
        Fale com a equipe da <strong>TECNOLOGY/S.A</strong>. Estamos prontos para ajudar você a encontrar as melhores soluções tecnológicas.
      </p>

      <div className="cards-contato">
        <div className="card">
          <h2>📞 Suporte Técnico</h2>
          <p><strong>Responsável:</strong> Carlos Silva</p>
          <p><strong>E-mail:</strong> suporte@tecnologysa.com</p>
          <p><strong>Celular:</strong> (11) 98888-1122</p>
        </div>

        <div className="card">
          <h2>💼 Atendimento Comercial</h2>
          <p><strong>Responsável:</strong> Juliana Andrade</p>
          <p><strong>E-mail:</strong> comercial@tecnologysa.com</p>
          <p><strong>Celular:</strong> (11) 97777-3344</p>
        </div>
      </div>
    </div>
  );
}
