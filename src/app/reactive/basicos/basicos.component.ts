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
    nombre: ['Produto', [Validators.required, Validators.minLength(3)]],
    precio: [1500, [Validators.required, Validators.min(0)]],
    existencias: [5, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }

  

}
