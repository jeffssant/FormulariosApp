import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  // miForm: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Produto'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),
  // })

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }


  campoEsValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
  }

  

}
