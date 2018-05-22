import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Observable, interval, Observer } from "rxjs";

import { Oferta } from "./../shared/oferta.model";

import { OfertasService } from "./../ofertas.service";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.ofertasService
          .getOfertaById(params.id)
          .then((oferta: Oferta) => (this.oferta = oferta))
          .catch((err: Error) => console.log(err))
      },
      (error: Error) => {
        console.log("error ", error);
      });

      const observableTeste = Observable.create((observer: Observer<any>) => {
        observer.next('teste');
      });

      observableTeste.subscribe((param: any) => {
        console.log("param ", param);
      });
  }
}
