import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Heroe } from "../interfaces/heroe.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  heroesURL: string = "https://heroesapp-62b42.firebaseio.com/heroes.json";

  constructor( private http: Http ) {}

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.heroesURL, body, { headers: headers })
  }
}
