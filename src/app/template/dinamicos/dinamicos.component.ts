import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  @ViewChild('miForm') miForm!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: "Jeff",
    favoritos: [
      {id:1, nombre: "Street fighter"},
      {id:2, nombre: "Mario Kart"}
    ]
  }

  guardar(){
    console.log("formulario posteado");
  }

  nombreValido():boolean {
    return this.miForm?.controls.name?.invalid && this.miForm?.controls.name?.touched
  } 

  eliminar(i: number) {
    this.persona.favoritos.splice(i,1)
  }

  agregarJuego() {
    if(!this.nuevoJuego){
      return;
    }
    
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length+1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

}
