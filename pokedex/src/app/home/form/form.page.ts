import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
    selector: 'app-form',
    templateUrl: 'form.page.html',
    styleUrls: ['form.page.scss']
})
export class FormPage implements OnInit {

    form!: FormGroup;

    constructor(private pokemonService: PokemonService, private router: Router, 
        private fb: FormBuilder, private activatedRouted: ActivatedRoute) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            id: [''],
            name: [''],
            description: [''],
            image: [''],
            favorite: [false],
            types: ['']
        })
        
        if(this.getId()){
            this.pokemonService.getPokemonById(this.getId()).valueChanges().subscribe((res:any) =>{
                console.log(res);
                
                this.form.setValue(res)
            })
        }
    }
    /**Cria o pokemon na base mock teste, ou atualiza caso o id tenha sido passado nos inputs */
    atualizarBase() {
        this.form.get("favorite")?.setValue(this.conversorBoolean(this.form.get("favorite")?.value))
        /**Verificando se os campos estão preenchidos */
        if (this.form.get("description")?.value && this.form.get("name")?.value
         && this.form.get("image")?.value
         && this.form.get("types")?.value) {
            /**Verificando id */
            if (this.getId()) {
                this.pokemonService.updatePokemon(this.form.getRawValue(), this.getId())
                    this.router.navigateByUrl("/")
                
            } else {
                this.pokemonService.postPokemon(this.form.getRawValue())
                    this.router.navigateByUrl("/")
            }
        }
    }

    /**Convertendo o valor do input de string para bool */
    conversorBoolean(bool: any) {
        return bool == "true" ? true : false;
    }

    getId(): string | null{
        return this.router.url.split("/")[3];
    }

}
