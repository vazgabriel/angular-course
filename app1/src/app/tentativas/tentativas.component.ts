import { Component, Input, OnChanges } from "@angular/core";

import { Coracao } from "./../shared/coracao.model";

@Component({
  selector: "app-tentativas",
  templateUrl: "./tentativas.component.html",
  styleUrls: ["./tentativas.component.css"]
})
export class TentativasComponent implements OnChanges {
  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  @Input("tentativas") public tentativas: number;

  constructor() {}

  ngOnChanges(event: any): void {
    if (this.tentativas !== this.coracoes.length) {
      const indice: number = this.coracoes.length - this.tentativas;

      if (indice > 0) {
        this.coracoes[indice - 1].cheio = false;
      }
    }
  }
}
