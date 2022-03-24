import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  name: string;
  favorites: Favorite[];
}
interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
})
export class DinamicsComponent {
  @ViewChild('myForm') myForm!: NgForm;
  nameValid(): boolean {
    return (
      this.myForm?.controls['name']?.invalid &&
      this.myForm?.controls['name']?.touched
    );
  }

  newGame: string = '';
  addGame() {
    const newFavorite: Favorite = {
      id: this.persona.favorites.length + 1,
      name: this.newGame,
    };

    this.persona.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

  persona: Persona = {
    name: 'Gerson',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Rock Alternativo' },
    ],
  };

  guardar() {
    console.log('Guardar cambios!');
  }

  eliminar(index: number) {
    this.persona.favorites.splice(index, 1);
  }
}
