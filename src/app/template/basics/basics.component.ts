import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'RTX-40 T',
    price: 10,
    stock: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  productValid(): boolean {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm?.controls['product']?.touched
    );
  }

  priceValid(): boolean {
    return (
      this.myForm?.controls['price']?.touched &&
      this.myForm?.controls['price']?.value < 0
    );
  }

  save() {
    console.log(this.myForm);
    this.myForm.resetForm({
      product: '',
      price: 0,
      stock: 0,
    });
  }
}
