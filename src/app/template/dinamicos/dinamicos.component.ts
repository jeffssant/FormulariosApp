import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log("formulario posteado");
  }

  nombreValido():boolean {
    return this.miForm?.controls.name?.invalid && this.miForm?.controls.name?.touched
  } 

}
