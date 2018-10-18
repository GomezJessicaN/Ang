import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':
        'Bearer BQCXi7-DwOnZ0jSiiXiEs6F7Ce7ZGRzNbNaHIQiMgj3wPBRtyFgJKjLuXz2aIkiOuhrDoOiwkz-0wX7vv-0'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=AR&offset=0&limit=15`
    ).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(
      `artists/${ id }`
    ); // .pipe(map(data => data["artists"].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(
      `artists/${id}/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
  }
}
