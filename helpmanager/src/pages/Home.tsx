import ChamadosTable, { type Chamado } from "../components/ChamadosTable";
import CreateHelpDialog from "../components/CreateHelpDialog";

const Home = () => {
  const chamados: Chamado[] = [
    { id: 1, assunto: "Erro sistema", descricao: "Erro ao acessar", status: "Aberto" },
    { id: 2, assunto: "Servidor", descricao: "Problema de conexão", status: "Em andamento" },
    { id: 3, assunto: "Relatórios", descricao: "Dúvida nos relatórios", status: "Aberto" },
  ];

  const cancelarChamado = (id: number) => {
    console.log(`Chamado ${id} cancelado!`);
  };

  return (
    <main className="p-6">
      <div className="mb-6">
        <CreateHelpDialog />
      </div>
      <ChamadosTable chamados={chamados} onCancelar={cancelarChamado} />
    </main>
  );
};

export default Home;
