package com.helpmanager.dto;

import jakarta.validation.constraints.NotBlank;

public class CreateChamadoRequest {

    @NotBlank
    private String assunto;

    @NotBlank
    private String descricao;

    @NotBlank
    private String categoriaGeral;

    @NotBlank
    private String categoriaEspecifica;

    // getters e setters
    public String getAssunto() { return assunto; }
    public void setAssunto(String assunto) { this.assunto = assunto; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public String getCategoriaGeral() { return categoriaGeral; }
    public void setCategoriaGeral(String categoriaGeral) { this.categoriaGeral = categoriaGeral; }

    public String getCategoriaEspecifica() { return categoriaEspecifica; }
    public void setCategoriaEspecifica(String categoriaEspecifica) { this.categoriaEspecifica = categoriaEspecifica; }
}
