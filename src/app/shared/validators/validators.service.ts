import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  }

  camposIguales(valor1: string, valor2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(valor1)?.value;
      const pass2 = formGroup.get(valor2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(valor2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }
      formGroup.get(valor2)?.setErrors(null);
      return null;
    };
  }
}
