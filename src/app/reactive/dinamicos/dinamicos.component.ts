import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormArray, Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],   
    favoritos: this.fb.array([
      ['Street Fighter', Validators.required],
      ['Mario Kart', Validators.required],
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miForm.get('favoritos') as FormArray;
  }


  constructor(private fb: FormBuilder) { }


  campoEsValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
  }

  agregarFavorito() {
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset()
  }

  guardar() {
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log(this.miForm.value);
    this.miForm.reset();
  }

  

}
