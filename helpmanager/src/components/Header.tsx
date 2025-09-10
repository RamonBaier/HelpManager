import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      {/* Nome do sistema */}
      <h1 className="text-xl font-bold text-zinc-100 tracking-wide">
        HelpManager
      </h1>

      {/* Botão de sair */}
      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium transition"
      >
        Sair
      </button>
    </header>
  );
};

export default Header;
