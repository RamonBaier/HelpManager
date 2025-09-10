// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import { PlusCircle, XCircle } from "lucide-react";

const Home = () => {
  // Chamados de exemplo (mockados por enquanto)
  const chamados = [
    { id: 1, descricao: "Erro ao acessar o sistema", status: "Aberto" },
    { id: 2, descricao: "Problema na conexão com o servidor", status: "Em andamento" },
    { id: 3, descricao: "Dúvida sobre relatórios", status: "Aberto" },
  ];

  const criarChamado = () => {
    console.log("Botão Criar Help clicado!");
  };

  const cancelarChamado = (id: number) => {
    console.log(`Chamado ${id} cancelado!`);
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100">
      {/* Menu lateral */}
      {/* <Sidebar /> */}

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1">
        {/* <Header /> */}

        <main className="p-6">
          {/* Botão de criar Help */}
          <div className="mb-6">
            <button
              onClick={criarChamado}
              className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-medium rounded-md shadow transition"
            >
              <PlusCircle size={20} />
              Criar um Help
            </button>
          </div>

          {/* Tabela de chamados */}
          <div className="bg-zinc-900 rounded-lg shadow overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-zinc-800 text-zinc-300">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Descrição</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {chamados.map((chamado) => (
                  <tr
                    key={chamado.id}
                    className="border-t border-zinc-800 hover:bg-zinc-800/50 transition"
                  >
                    <td className="px-4 py-3">{chamado.id}</td>
                    <td className="px-4 py-3">{chamado.descricao}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium
                          ${chamado.status === "Aberto"
                            ? "bg-green-700 text-white" // Chamado aberto
                            : chamado.status === "Em andamento"
                              ? "bg-yellow-500 text-black" // Chamado em andamento
                              : "bg-gray-500 text-white" // fallback (ex: fechado ou outro)
                          }`}
                      >
                        {chamado.status}
                      </span>

                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => cancelarChamado(chamado.id)}
                        className="flex-row-reverse items-center gap-1 text-red-500 hover:text-red-400 transition"
                      >
                        <XCircle size={18} />
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
