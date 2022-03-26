import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
})
export class DinamicsComponent {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranger', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArray() {
    return this.myForm.get('favorites') as FormArray;
  }

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }
    // this.favoritesArray.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArray.push(this.fb.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  fieldsValid(campo: string) {
    return (
      this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
    );
  }

  guardar() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset(); // Para limpiar los campos
    this.favoritesArray.clear(); // Para limpiar el arreglo despues de postear
  }

  borrar(i:number) {
    this.favoritesArray.removeAt(i);
  }
}
