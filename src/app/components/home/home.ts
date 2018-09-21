import { Component, ViewChild } from '@angular/core';
import { ListItem } from '../listItem/listItem'

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
    @ViewChild(ListItem) listItem:ListItem

    campoNota
    usuarioAtual = "nomeusuario"
    dados = [
        {usuario: "nomeusuario", titulo: "titulo da nota", nota: " esta é minha nota...", cricao: "10/07/2018"},
        {usuario: "nomeusuario", titulo: "titulo da nota 2", nota: " esta é minha nota 2 ...", cricao: "10/07/2018"},
        {usuario: "nomeusuario", titulo: "titulo da nota 3", nota: " esta é minha nota 3 ...", cricao: "10/07/2018"},
    ]

    listaItens() {
        this.listItem.montaLista(this.dados)
    }

    limpaCampo() {
        this.campoNota = ""
    }

    salvar() {
        // organiza em forma de obj
        //envia para salvar no banco
        this.addObj()
    }

    addObj() {
        //salva no banco
    }
}

