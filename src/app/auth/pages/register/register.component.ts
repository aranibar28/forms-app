import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private vs: ValidatorsService, private ev: EmailValidatorService) {}

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Gerson Aranibar',
      email: 'test1@test.com',
      username: 'aranibar28',
      password1: "123456",
      password2: "123456"
    });
  }

  myForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.vs.namePattern)]],
    email: [, [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username: [, [Validators.required, this.vs.noPuedeSerStrider],],
    password1: [, [Validators.required, Validators.minLength(6)]],
    password2: [, [Validators.required]],
  },{
    validators: [this.vs.camposIguales('password1', 'password2')]
  });

  get emailMSG(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'El correo debe ser obligatorio';
    } else if (errors?.['pattern']) {
      return 'El correo debe tener un formato válido';
    } else if (errors?.['emailTomado']) {
      return 'El correo ya fue tomado';
    }
    return '';
  }
  
  fieldsValid(campo: string) {
    return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
  }

  submitForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
