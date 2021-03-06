import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red
  }
  `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais: "",
    sexo:"otre",
    acepta:false
  }

  paises =[{
    codigo:"CRI",
    nombre:"Costa Rica"
  },
{
  codigo:"ESP",
  nombre:"España"
},{
  codigo: "AR",
  nombre:"Argentina"
}]

sexos:string[] = ["Hombre", "Mujer", "otre"]

  constructor() { }

guardar( forma:NgForm ){
  console.log( "ngForm", forma);
  console.log("valor forma", forma.value);
  console.log("Usuario", this.usuario);
}

}