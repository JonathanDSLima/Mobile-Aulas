import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Pokemon } from '../models/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService]
})
export class HomePage implements OnInit, OnChanges {

  pokemonList = new Array<any>();
  pokemon = {
    name: '',
    description: '',
    image: '',
    favorite: false,
    types: ''
  }

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getLista();
  }

  ngOnInit(): void {
    this.getLista()
  }

  /**Popula a tabela */
  getLista() {
    this.pokemonService.getAll().snapshotChanges().subscribe( (res:any) => {
      this.pokemonList = [];
      res.forEach((element:any) => {
        let a = element.payload.toJSON();
        a["$key"] = element.key
        this.pokemonList.push(a as Pokemon);
      });
    });
  }

  /**Deleta o pokemon na base pelo id */
  deletarPokemon(id: string | number) {
    console.log(id);
    
    if(window.confirm("Certeza que deseja apagar esse pokemon?")){
      this.pokemonService.deletePokemon(id);
      location.reload();
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

  navigateFormEye(id?: string | number){
      this.router.navigate([`home/form-detail/${id}`])
  }

}
