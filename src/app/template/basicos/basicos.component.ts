import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]  
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  initForm = {
    producto:"",
    precio: 0,
    existencias: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miForm.value);
    this.miForm.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido():boolean {
    return this.miForm?.controls.producto?.invalid && this.miForm?.controls.producto?.touched
  } 

}
