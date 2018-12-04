import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

heroe: Heroe = {
nombre: '',
bio: '',
casa: 'Marvel'
};

  constructor( private _heroesService: HeroesService ) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    this._heroesService.nuevoHeroe( this.heroe )
    .subscribe( data =>)
  }

}
