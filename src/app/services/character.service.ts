import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    const url = `${this.apiUrl}/character`;
    return this.http.get(url);
  }

  getCharacter(id: number): Observable<any> {
    const url = `${this.apiUrl}/character/${id}`;
    return this.http.get(url);
  }
}