
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
  private baseUrl = environments.baseUrl
  constructor(private httpClient: HttpClient) { }

  getHeroes() : Observable<Hero[]>{
    const url = `${this.baseUrl}/heroes`;
    return this.httpClient.get<Hero[]>(url)
  }

  getHeroById(id: string): Observable<Hero | undefined>{
    const url = `${this.baseUrl}/heroes/${id}`;
    return this.httpClient.get<Hero>(url).pipe(
      catchError((error) => of(undefined))
    )
  }

  getSuggestions(query: string) : Observable<Hero[]> {
    const url = `${this.baseUrl}/heroes?q=${query}&_limit=6`;
    return this.httpClient.get<Hero[]>(url)
  }
}
