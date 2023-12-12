import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devise } from '../model/devise';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevisesService {

  
  // URL du service web de gestion des devises
  // Commune pour toutes les méthodes
  urlHote = "http://localhost:8082/devises/";
  rechercher: any;

  constructor(private http: HttpClient) {}

  getDevises(): Observable<Array<Devise>> {
    return this.http.get<Array<Devise>>(this.urlHote+'getall', {
      headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' }
    });
  }
  getAmount(ids: number): Observable<Devise> {
    // Assuming your API endpoint for getting the amount is something like 'http://localhost:8082/amount/{id}'
    const amountUrl = this.urlHote+"getCourant/"+ids;

    return this.http.get<Devise>(amountUrl, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' }
    });
  }

  deleteDevise(ids: number|undefined)
  {
    return this.http.delete(this.urlHote+"delete/"+ids);
  }

  addDevise(nouveau: Devise): Observable<Array<Devise>> {
    return this.http.post<Array<Devise>>(this.urlHote, nouveau);
  }

  updateDevise(ids: number | undefined, nouveau: Devise) {
    return this.http.put(this.urlHote,nouveau);
  }
 // Dans votre service
 searchDevise(nomDevise: string): Observable<Devise[]> {
  const nameUrl = this.urlHote + 'getByName/' + nomDevise;
  return this.http.get<Devise[]>(nameUrl, {
    headers: { 'Access-Control-Allow-Origin': '*', Accept: 'application/json' },
  });
}


  
}