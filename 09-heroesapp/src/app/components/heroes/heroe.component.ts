import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { getInheritedFactory } from '@angular/core/src/render3';



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
nuevo:boolean = false;
id:string;

  constructor( private _heroesService: HeroesService,
    private router:Router, private route:ActivatedRoute ) {
      this.route.params.subscribe( parametros =>{
        this.id = parametros ['id'];
        if (this.id !== "nuevo"){
          this._heroesService.getHeroe( this.id ).subscribe( heroe =>
            this.heroe = heroe )
        }
      })
    }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    if(this.id == "nuevo"){
      //insertando
      this._heroesService.nuevoHeroe( this.heroe )
      .subscribe( data =>{
        this.router.navigate(['/heroe', data])

       } , error=> console.error(error));
    }else{
      //actualizando
      this._heroesService.ActualizarHeroe( this.heroe, this.id )
    .subscribe(data =>{
      console.log(data);
    },
    error=>console.error(error));
      }

}

agregarNuevo(form: NgForm){
  this.router.navigate(['/heroe', 'nuevo']);
  form.reset({
    casa:"Marvel"
  });
}
}
