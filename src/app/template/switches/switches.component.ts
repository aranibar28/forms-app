import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
})
export class SwitchesComponent {
  persona = {
    genre: 'M',
    notifications: false,
  };

  terms: boolean = false;
}
