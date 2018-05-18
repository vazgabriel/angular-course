import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { Oferta } from "./shared/oferta.model";

@Injectable()
export class OfertasService {
  private urlApi: string = "http://localhost:3000/ofertas";
  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${this.urlApi}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.urlApi}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

  public getOfertaById(id: string | number): Promise<Oferta> {
    return this.http.get(`${this.urlApi}/${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }
}
