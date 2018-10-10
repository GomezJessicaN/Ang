import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify sevice listo')
   }

   getNewReleases() {
const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBwzhoWpqGmQYn-syp3w8aZpna1Iu4mFUKhhZc9ttNXTaW3szV0a8uSgo_rWLil27GsmQMO5p-kfLv4Iok'
});

this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
.subscribe(data => {
  console.log(data);
});
   }
}
