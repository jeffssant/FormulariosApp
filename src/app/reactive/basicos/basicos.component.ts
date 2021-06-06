import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
    nombre: ['Produto'],
    precio: [1500],
    existencias: [5],
  })

  constructor(private fb: FormBuilder) { }

  

}
