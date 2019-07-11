import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonService {

  constructor(private http: HttpClient) { }

  async getPokemon(pokemon: string) {
    return await this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon);

  }
}
