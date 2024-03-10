
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
