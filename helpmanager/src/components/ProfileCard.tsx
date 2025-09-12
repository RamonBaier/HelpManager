import {
  Card,
  Flex,
  Avatar,
  Button,
  Text,
  Dialog,
} from "@radix-ui/themes";
import { ChevronDown } from "lucide-react";


export default function ProfileCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Card
          className="bg-zinc-900 border border-zinc-700 p-4 cursor-pointer hover:bg-zinc-800 transition-colors"
          asChild
        >
          <a>
            <Flex align="center" justify="between">
              <Flex align="center" gap="3">
                <Avatar
                  src="" // sua imagem aqui
                  fallback="RB"
                  size="3"
                  radius="full"
                />
                <div>
                  <Text weight="bold">Ramon Baier</Text>
                  <br />
                  <Text size="1" color="gray">
                    Administrador
                  </Text>
                </div>
              </Flex>
              <ChevronDown className="text-zinc-400" size={18} />
            </Flex>
          </a>
        </Card>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-md">
        <Dialog.Title>Perfil do Usuário</Dialog.Title>
        <Dialog.Description className="mb-4">
          Informações detalhadas do perfil.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <Flex align="center" gap="3">
            <Avatar
              src="" // mesma imagem
              fallback="RB"
              size="4"
              radius="full"
            />
            <div>
              <Text weight="bold" size="4">
                Ramon Baier
              </Text>
              <br />
              <Text size="2" color="gray">
                Administrador
              </Text>
            </div>
          </Flex>

          <div className="mt-4">
            <Text size="2">
              <strong>Email:</strong> ramon@example.com
            </Text>
            <br />
            <Text size="2">
              <strong>Departamento:</strong> Suporte Técnico
            </Text>
            <br />
            <Text size="2">
              <strong>Desde:</strong> Janeiro de 2023
            </Text>
          </div>

          <Flex gap="2" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Fechar
              </Button>
            </Dialog.Close>
            <Button variant="solid">Editar Perfil</Button>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
