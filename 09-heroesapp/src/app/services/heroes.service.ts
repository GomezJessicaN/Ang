import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Heroe } from "../interfaces/heroe.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  heroesURL: string = "https://heroesapp-62b42.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-62b42.firebaseio.com/heroes/ "
  constructor( private http: Http ) {}

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.post(this.heroesURL, body, { headers: headers })
  }

 ActualizarHeroe( heroe: Heroe, key$:string ) {
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      "Content-Type": "application/json"
    });
    let url=  `${ this.heroeURL }/${ key$}.json`; 
    return this.http.put(url, body, { headers })
  }

getHeroe (key$:string ){
  let url = `${ this.heroeURL }/${ key$ }.json`;
  return this.http.get( url )
}

getHeroes(){
  return this.http.get ( this.heroesURL )
}
}
