// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

const Chamados = () => {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1">
        {/* <Header /> */}

        <main className="p-6">
          <h1 className="text-2xl font-bold">Chamados</h1>
          <p className="text-zinc-400 mt-2">
            Aqui você pode visualizar, criar e gerenciar seus chamados.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Chamados;
