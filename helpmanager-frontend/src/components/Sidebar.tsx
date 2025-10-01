import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, ClipboardList } from "lucide-react";
import ProfileCard from "./ProfileCard";
import { Separator } from "@radix-ui/themes";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "bg-zinc-800 text-white"
      : "text-zinc-300 hover:bg-zinc-800 hover:text-white";

  const navItems = [
    { to: "/home", icon: <Home size={25} />, label: "Home" },
    { to: "/chat", icon: <MessageCircle size={25} />, label: "Chat" },
    { to: "/chamados", icon: <ClipboardList size={25} />, label: "Chamados" },
  ];

  return (
    <aside className="w-70 h-screen bg-zinc-900 text-zinc-100 shadow-lg flex flex-col">
      <div className="p-3">
        <ProfileCard />
      </div>

      <Separator size="4" className="bg-zinc-700" />

      <nav className="flex flex-col gap-2 p-4 flex-1">
        {navItems.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${isActive(
              to
            )}`}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
