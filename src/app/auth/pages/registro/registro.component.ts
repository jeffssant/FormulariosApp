import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { emailPattern } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})

export class RegistroComponent implements OnInit {  

  miForm: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.validatorService.nombreApelidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username:['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmarPass:['',Validators.required],
  },  
  {
    validators: [
      this.validatorService.camposIguales('password', 'confirmarPass')
    ]
  })

  get emailErrorsMsg():string {
    const errors = this.miForm.get('email')?.errors;

    if(errors?.required){
      return 'Email es obligatorio'
    }

    else if(errors?.pattern){
      return 'El valor ingressado no tiene formato de correo'
    }

    else if(errors?.emailTomado){
      return 'El email ya fue tomado'
    }


    return "";
  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: "Jeff Sant",
      email: "test1@test.com",
      username: "jeffssant",
      password: '123456',
      confirmarPass: '123456',
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
