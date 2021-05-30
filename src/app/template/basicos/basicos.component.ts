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

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miForm.value)
  }

  nombreValido():boolean {
    return this.miForm?.controls.producto?.invalid && this.miForm?.controls.producto?.touched
  }

}
