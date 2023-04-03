import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService]
})
export class HomePage implements OnInit {

  pokemonList = new Array<Pokemon>();
  pokemon = {
    id: null,
    name: '',
    description: '',
    image: '',
    favorite: false,
    types: ''
  }

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getLista()
  }

  /**Popula a tabela */
  getLista() {
    this.service.getPokemons().subscribe((res: Pokemon[]) => {
      console.log(res);

      this.pokemonList = res
    })
  }

  /**Cria o pokemon na base mock teste, ou atualiza caso o id tenha sido passado nos inputs */
  atualizarBase() {
    this.pokemon.favorite = this.conversorBoolean(this.pokemon.favorite)
    /**Verificando se os campos estão preenchidos */
    if (this.pokemon.description && this.pokemon.name && this.pokemon.image && this.pokemon.types) {
      /**Verificando id */
      if (this.pokemon.id) {
        this.service.updatePokemons(this.pokemon, this.pokemon.id).subscribe((res) => {
          console.log(res);
          this.getLista()
        })
      } else {
        this.service.postPokemon(this.pokemon).subscribe((res) => {
          console.log(res);
          this.getLista()
        })
      }
    }

  }

  /**Deleta o pokemon na base pelo id */
  deletarPokemon(id: number) {
    this.service.deletePokemons(id).subscribe((res) => {
      console.log(res);
      this.getLista()
    })
  }

  /**Convertendo o valor do input de string para bool */
  conversorBoolean(bool: any) {
    return bool == "true" ? true : false;
  }

}
