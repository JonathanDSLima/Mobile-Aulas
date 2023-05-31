import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(environment.url);
  }

  public postPokemon(value: any): Observable<Pokemon[]> {
    return this.http.post<Pokemon[]>(environment.url, value);
  }

  public updatePokemons(value: any, id: number): Observable<Pokemon[]> {
    return this.http.put<Pokemon[]>(`${environment.url}/${id}`, value);
  }

  public deletePokemons(id: number): Observable<Pokemon[]> {
    return this.http.delete<Pokemon[]>(`${environment.url}/${id}`);
  }
}
