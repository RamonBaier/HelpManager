import { Link } from "react-router-dom";
import { Home, MessageCircle, ClipboardList } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-900 text-zinc-100 h-full shadow-lg flex flex-col">
      {/* Perfil no topo */}
      <div className="p-6 flex items-center space-x-4 border-b border-zinc-700">
        <img
          src=""
          alt=""
          className="w-12 h-12 rounded-full border border-zinc-600"
        />
        <div>
          <p className="font-semibold text-white">Ramon Baier</p>
          <p className="text-sm text-zinc-400">Administrador</p>
        </div>
      </div>

      {/* Navegação */}
      <nav className="p-6 space-y-3 flex-1">
        <Link
          to="/home"
          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link
          to="/chat"
          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat</span>
        </Link>

        <Link
          to="/chamados"
          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          <ClipboardList className="w-5 h-5" />
          <span>Chamados</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
