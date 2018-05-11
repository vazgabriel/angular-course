import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Frase } from "./../shared/frase.model";
import { FRASES } from "./frases.mock";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase:";
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public tentavivas: number = 3;

  @Output() public encerrar: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  public atualizaRodada(): void {
    this.resposta = "";

    if (this.rodada < this.frases.length) {
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      this.encerrar.emit(true);
    }
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      this.atualizaRodada();
    } else {
      this.tentavivas--;
      alert(
        `Sua resposta não é válida${
          this.tentavivas >= 0 ? ", tente novamente" : ". Você perdeu!"
        }`
      );

      if (this.tentavivas < 0) {
        this.encerrar.emit(false);
      }
    }
  }
}
