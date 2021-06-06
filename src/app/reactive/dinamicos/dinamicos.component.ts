import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],   
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
