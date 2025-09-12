import { Table, Badge, Button } from "@radix-ui/themes";
import { XCircle } from "lucide-react";

export interface Chamado {
  id: number;
  assunto: string;
  descricao: string;
  status: "Aberto" | "Em andamento" | string;
}

interface ChamadosTableProps {
  chamados: Chamado[];
  onCancelar: (id: number) => void;
}

export default function ChamadosTable({ chamados, onCancelar }: ChamadosTableProps) {
  const badgeColor = (status: string) => {
    switch (status) {
      case "Aberto":
        return "green";
      case "Em andamento":
        return "yellow";
      default:
        return "gray";
    }
  };

  return (
    <div className="rounded-lg shadow p-2">
      <Table.Root size="3" variant="surface" className="w-full text-zinc-100">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="w-12 text-zinc-300">
              ID
            </Table.ColumnHeaderCell>

            {/* coluna principal ocupa mais */}
            <Table.ColumnHeaderCell className="w-[60%] text-zinc-300">
              Assunto + Descrição
            </Table.ColumnHeaderCell>

            {/* largura menor para status e ações */}
            <Table.ColumnHeaderCell className="w-32 text-zinc-300">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="w-32 text-zinc-300 text-center ">
              Ações
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {chamados.map((c) => (
            <Table.Row key={c.id} className="hover:bg-zinc-800/50 transition">
              <Table.Cell className="w-12">{c.id}</Table.Cell>

              <Table.Cell className="w-[60%]">
                <div className="flex flex-col">
                  <span className="font-semibold">{c.assunto}</span>
                  <span className="text-sm text-zinc-400">{c.descricao}</span>
                </div>
              </Table.Cell>

              <Table.Cell className="w-32">
                <Badge size="3" radius="full" color={badgeColor(c.status)}>
                  {c.status}
                </Badge>
              </Table.Cell>

              <Table.Cell className="w-32 text-center">
                <Button
                  color="red"
                  variant="solid"
                  size="2"
                  onClick={() => onCancelar(c.id)}
                >
                  <XCircle size={16} />
                  Cancelar
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
