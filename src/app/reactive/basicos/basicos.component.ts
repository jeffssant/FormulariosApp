import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  ngOnInit(){
    this.miForm.reset({
      nombre: 'Product',
      precio: 100      
    })
  }

  // miForm: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Produto'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),
  // })

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: ['', [Validators.required, Validators.min(0)]],
    existencias: ['', [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }


  campoEsValido(campo: string) {
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
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
