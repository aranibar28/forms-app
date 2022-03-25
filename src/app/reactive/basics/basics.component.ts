import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

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
    this.myForm.reset();
  }
}
