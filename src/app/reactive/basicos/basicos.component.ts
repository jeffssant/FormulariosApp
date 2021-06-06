import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  miForm: FormGroup = new FormGroup({
    'nombre': new FormControl('Produto')
  })

  constructor() { }

  

}
