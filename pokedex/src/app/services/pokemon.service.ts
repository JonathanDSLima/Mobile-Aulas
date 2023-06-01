import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomePage } from '../home/home.page';
import { Pokemon } from '../models/pokemon.interface';

const URL = "/pokemons"

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor(public dataBase: AngularFireDatabase) { }

  getAll() {
    return this.dataBase.list(URL);
  }

  postPokemon(pokemon: Pokemon) {
    return this.dataBase.list(URL).push({
      id: new Date().getTime().toString(),
      name: pokemon.name,
      description: pokemon.description,
      image: pokemon.image,
      favorite: pokemon.favorite,
      types: pokemon.types
    });
  }

  updatePokemon(pokemon: Pokemon, id: string | null) {
    let aux = this.getPokemonById(id)
    return aux.update({
      id: new Date().getTime().toString(),
      name: pokemon.name,
      description: pokemon.description,
      image: pokemon.image,
      favorite: pokemon.favorite,
      types: pokemon.types
    });
  }

  getPokemonById(id: string | number | null) {
    return this.dataBase.object(URL + "/" + id);
  }

  deletePokemon(id: string | number | null) {
    return this.dataBase.object(URL + "/" + id).remove();
  }

}