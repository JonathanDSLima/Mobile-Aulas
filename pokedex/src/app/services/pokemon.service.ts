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

}