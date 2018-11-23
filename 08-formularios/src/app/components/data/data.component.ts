import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

 forma: FormGroup;

 usuario:any = {
   nombrecompleto: {
     nombre:"Marta",
     apellido:"Del valle"
   },
   correo:"Marta.delvalle@gmail.com",
  // pasatiempos: ["Correr", "Dormir", "Comer"]
 }
  constructor() {
 console.log(this.usuario);

this.forma = new FormGroup({

  'nombrecompleto': new FormGroup({
    // this.usuario.nombrecompleto.nombre
    'nombre': new FormControl( '' , [Validators.required, Validators.minLength(3)]),
    'apellido': new FormControl('' , [Validators.required, this.noHerrera])
  }),
  'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
  'pasatiempos':new FormArray([
    new FormControl('Correr', Validators.required)
  ]),
  'username': new FormControl('', Validators.required),
  'password1': new FormControl('', Validators.required),
  'password2': new FormControl()
});

this.forma.controls['password2'].setValidators([
  Validators.required,
  this.noIgual.bind(this.forma)
])
 //this.forma.setValue( this.usuario);
  }
agregarPasatiempo(){
  (<FormArray>this.forma.controls['pasatiempos']).push(
    new FormControl('', Validators.required)
  )
}

noHerrera(control: FormControl): {[s:string]:boolean}{
if(control.value === "herrera"){
  return{
    noherrera:true
  }
}
return null;
}

noIgual( control: FormControl): {[s:string]:boolean}{

  console.log(this);
  let forma:any = this;

  if(control.value === forma.controls['password1'].value){
    return{
      noiguales:true
    }
  }
  return null;
  }

  existeUsuario( control: FormControl ): Promise<any> Observable<any>{

  }

guardarCambios() {
  console.log(this.forma.value);
  console.log(this.forma);
  this.forma.reset({
  //  nombrecompleto:{
  //    nombre:"",
  //    apellido:""
  //  },
  //  correo:""
  // });


});
}
}
