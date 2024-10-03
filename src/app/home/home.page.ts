import { Component } from '@angular/core';

export interface Person {
  name: string;
  surname: string;
  age: number;
  isFavorite: boolean;  // Nueva propiedad
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Lista de personas
  people: Person[] = [];

  // Datos del formulario
  persona = {
    name: '',
    surname: '',
    age: null
  };

  constructor() {
  }

  // Función para registrar una nueva persona desde el formulario
  registrarPersona() {
    if (this.persona.name && this.persona.surname && this.persona.age !== null) {
      // Añadir la nueva persona al arreglo con la propiedad isFavorite por defecto en false
      this.people.push({
        name: this.persona.name,
        surname: this.persona.surname,
        age: this.persona.age,
        isFavorite: false
      });

      // Limpiar el formulario
      this.persona = { name: '', surname: '', age: null };
    }
  }

  // Función para alternar el estado de favorito
  toggleFavorite(person: Person) {
    person.isFavorite = !person.isFavorite;
  }
}
