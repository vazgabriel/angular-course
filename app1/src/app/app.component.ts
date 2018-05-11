import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  vitoria: string;

  constructor() {}

  public aoEncerrar(vitoria: boolean): void {
    this.vitoria = vitoria.toString();
  }

  public reiniciarJogo(): void {
    this.vitoria = undefined;
  }
}
