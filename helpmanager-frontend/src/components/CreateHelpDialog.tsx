import * as Dialog from "@radix-ui/react-dialog";
import { PlusCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function CreateHelpDialog() {
  // Estado para categorias
  const [categoriaGeral, setCategoriaGeral] = useState("");
  const [categoriaEspecifica, setCategoriaEspecifica] = useState("");

  // Opções dinâmicas de categorias específicas
  const opcoesEspecificas: Record<string, string[]> = {
    Whatsapp: ["Erro de envio", "Sem conexão", "Outros"],
    Site: ["Login", "Pagamentos", "Layout", "Outros"],
    Computador: ["Hardware", "Software", "Rede", "Outros"],
    Outros: ["Diversos"],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const assunto = (form.elements.namedItem("assunto") as HTMLInputElement).value;
    const descricao = (form.elements.namedItem("descricao") as HTMLTextAreaElement).value;

    // 🔴 Aqui, por enquanto, só mandamos pro console
    console.log({
      assunto,
      descricao,
      categoriaGeral,
      categoriaEspecifica,
    });

    // Se quiser, você pode limpar os campos após salvar:
    form.reset();
    setCategoriaGeral("");
    setCategoriaEspecifica("");
  };

  return (
    <Dialog.Root>
      {/* Botão de abertura */}
      <Dialog.Trigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-medium rounded-md shadow transition">
          <PlusCircle size={20} />
          Criar um Help
        </button>
      </Dialog.Trigger>

      {/* Modal */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-zinc-900 p-6 rounded-lg shadow">
          <Dialog.Title className="text-lg font-semibold mb-4 text-amber-50">
            Novo Chamado
          </Dialog.Title>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Assunto */}
            <div>
              <label className="block mb-1 text-sm text-amber-50">Assunto</label>
              <input
                name="assunto"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-800 text-amber-50"
                placeholder="Título ou assunto do chamado"
                required
              />
            </div>

            {/* Descrição */}
            <div>
              <label className="block mb-1 text-sm text-amber-50">Descrição</label>
              <textarea
                name="descricao"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-800 text-amber-50"
                placeholder="Descreva o problema"
                rows={3}
                required
              />
            </div>

            {/* Categoria Geral */}
            <div>
              <label className="block mb-1 text-sm text-amber-50">Categoria Geral</label>
              <select
                value={categoriaGeral}
                onChange={(e) => {
                  setCategoriaGeral(e.target.value);
                  setCategoriaEspecifica(""); // resetar específica
                }}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-800 text-amber-50"
                required
              >
                <option value="">Selecione...</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Site">Site</option>
                <option value="Computador">Computador</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            {/* Categoria Específica */}
            <div>
              <label className="block mb-1 text-sm text-amber-50">Categoria Específica</label>
              <select
                value={categoriaEspecifica}
                onChange={(e) => setCategoriaEspecifica(e.target.value)}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-800 text-amber-50"
                required
                disabled={!categoriaGeral}
              >
                <option value="">Selecione...</option>
                {categoriaGeral &&
                  opcoesEspecificas[categoriaGeral].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-2 rounded"
            >
              Salvar
            </button>
          </form>

          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-amber-50 hover:text-red-500">
              <XCircle size={40} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
