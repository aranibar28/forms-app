import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  myForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [true, Validators.requiredTrue],
  });

  persona = {
    genre: 'F',
    notifications: true,
  };

  ngOnInit(): void {
    this.myForm.reset({ ...this.persona, conditions: false });
    this.myForm.valueChanges.subscribe(({ conditions, ...rest }) => {
      this.persona = rest;
    });
  }

  guardar() {
    const formValue = { ...this.myForm.value };
    delete formValue.conditions;
    this.persona = formValue;
  }
}
