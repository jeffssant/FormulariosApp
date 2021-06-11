import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})

export class RegistroComponent implements OnInit {  

  miForm: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.validatorService.nombreApelidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username:['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmarPass:['',Validators.required],
  },  
  {
    validators: [
      this.validatorService.camposIguales('password', 'confirmarPass')
    ]
  })

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: "Jeff Sant",
      email: "jeff@teste.com",
      username: "jeffssant",
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
