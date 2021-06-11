import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApelidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerStrider (control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      return { noStrider:true }
    }

    return null;
  }

  miForm: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.nombreApelidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username:['', [Validators.required, this.noPuedeSerStrider]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: "Jeff Sant",
      email: "jeff@teste.com",
    })
  }

  campoNoValido(campo: string){
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched
  }

  submit() {
    console.log(this.miForm.value);
    this.miForm.markAllAsTouched();
  }

}
