import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify sevice listo');
   }

getQuery (query: string) {
const url = `https://api.spotify.com/v1/${ query }`;
const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBMM6QxKyG2t2ICcTzkMjbJpUlIrF3xl-8PzhsmgzcxIsKTRqdg-PGu_1hMQcv74P6OPoU-Y6raIACCoCA'
});
return this.http.get(url, { headers });
}

   getNewReleases() {
return this.getQuery('browse/new-releases')
  .pipe(map(data  => data['albums'].items
  ));

   }

   getArtista( termino: string ) {
    return this.getQuery(`search?query=${ termino }&type=artist&market=AR&offset=0&limit=15`)
     .pipe(map(data => data['artists'].items
     ));
   }
}
