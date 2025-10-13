package com.helpmanager.controller;

import com.helpmanager.dto.CreateChamadoRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/api/chamados")
@CrossOrigin(origins = "http://localhost:5173") // ajuste a origem do seu front Vite
public class ChamadoController {

    // neste passo 1 inicial, não usamos service nem banco ainda:
    @PostMapping
    public ResponseEntity<Map<String, Object>> createChamado(@Valid @RequestBody CreateChamadoRequest req) {
        // Aqui você faria validações adicionais / salvaria no DB
        System.out.println("📥 Chamado recebido no backend:");
        System.out.println("Assunto: " + req.getAssunto());
        System.out.println("Descrição: " + req.getDescricao());
        System.out.println("CategoriaGeral: " + req.getCategoriaGeral());
        System.out.println("CategoriaEspecifica: " + req.getCategoriaEspecifica());

        // Resposta simples com o mesmo payload + id simulado
        Map<String, Object> response = new java.util.HashMap<>();
        response.put("id", 1);
        response.put("assunto", req.getAssunto());
        response.put("descricao", req.getDescricao());
        response.put("categoriaGeral", req.getCategoriaGeral());
        response.put("categoriaEspecifica", req.getCategoriaEspecifica());
        response.put("status", "Aberto");

        // Retorna 201 Created com body
        return ResponseEntity.created(URI.create("/api/chamados/1")).body(response);
    }
}
