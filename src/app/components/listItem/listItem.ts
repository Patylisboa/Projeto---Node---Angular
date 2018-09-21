import { Component } from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './listItem.html',
})

export class ListItem {
    dados = {}
    public montaLista(itens) {
        this.dados = itens
    }

    //public itemAtual = "novo"
}