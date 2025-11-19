// src/components/CreateHelpDialog.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { PlusCircle, XCircle } from "lucide-react";
import { useState } from "react";

export default function CreateHelpDialog() {
  const [categoriaGeral, setCategoriaGeral] = useState("");
  const [categoriaEspecifica, setCategoriaEspecifica] = useState("");
  const [, setLoading] = useState(false);

  const opcoesEspecificas: Record<string, string[]> = {
    Whatsapp: ["Erro de envio", "Sem conexão", "Outros"],
    Site: ["Login", "Pagamentos", "Layout", "Outros"],
    Computador: ["Hardware", "Software", "Rede", "Outros"],
    Outros: ["Diversos"],
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const assunto = (form.elements.namedItem("assunto") as HTMLInputElement).value;
    const descricao = (form.elements.namedItem("descricao") as HTMLTextAreaElement).value;

    const payload = {
      assunto,
      descricao,
      categoriaGeral,
      categoriaEspecifica,
    };

    // 1) Console log local (para debug)
    console.log("Enviando payload para o backend:", payload);

    // 2) Enviar para o backend
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/chamados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // se futuramente usar auth: Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Erro ${res.status}: ${text}`);
      }

      const data = await res.json();
      console.log("Resposta do backend:", data);

      // opcional: limpar o form / fechar modal / disparar callback
      form.reset();
      setCategoriaGeral("");
      setCategoriaEspecifica("");
      // se quiser: fechar modal via state/props do Radix (ex: controlado)
    } catch (err) {
      console.error("Falha ao enviar chamado:", err);
      alert("Erro ao criar chamado. Veja console para detalhes.");
    } finally {
      setLoading(false);
    }
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
