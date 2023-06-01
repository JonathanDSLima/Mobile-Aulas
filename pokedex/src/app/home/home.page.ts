import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService]
})
export class HomePage implements OnInit {

  pokemonList = new Array<any>();
  pokemon = {
    id: null,
    name: '',
    description: '',
    image: '',
    favorite: false,
    types: ''
  }

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getLista()
  }

  /**Popula a tabela */
  getLista() {
    this.pokemonService.getAll().valueChanges().subscribe( res => {
      this.pokemonList = res;
      
    });
  }

  /**Deleta o pokemon na base pelo id */
  deletarPokemon(id: string | number) {
    if(window.confirm("Certeza que deseja apagar esse pokemon?")){
      this.pokemonService.deletePokemon(id)
    }
  }

  /**Navegar para o form*/
  navigateForm(id?: string | number){
    if(id){
      this.router.navigate([`home/form/${id}`])
    }else {
      this.router.navigate(["home/form"])
    }
  }

}
