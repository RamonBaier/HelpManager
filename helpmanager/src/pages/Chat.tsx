// src/pages/Chat.jsx

import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "suporte", text: "Olá! Como posso te ajudar hoje?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "usuario",
      text: input.trim(),
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex h-full bg-zinc-950 text-zinc-100">
      {/* Sidebar opcional */}
      {/* <Sidebar /> */}

      <div className="flex flex-col flex-1">
        {/* Header do chat */}
        {/* <header className="p-4 bg-zinc-900 border-b border-zinc-800">
          <h1 className="text-xl font-semibold">Atendimento ao Cliente</h1>
        </header> */}

        {/* Área de mensagens */}
        <main className="flex-1 p-6 overflow-y-auto flex flex-col space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`inline-block max-w-[40%] px-4 py-2 rounded-lg break-words ${
                msg.sender === "usuario"
                  ? "bg-blue-600 text-white self-end ml-auto"
                  : "bg-zinc-800 text-zinc-100 self-start mr-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </main>

        {/* Campo de input */}
        <footer className="p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-semibold"
            >
              Enviar
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
