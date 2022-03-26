import { Component } from '@angular/core';

interface MenuItem {
  tittle: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [],
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    { tittle: 'Básicos', route: './template/basics' },
    { tittle: 'Dinámicos', route: './template/dinamics' },
    { tittle: 'Switches', route: './template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { tittle: 'Básicos', route: './reactive/basics' },
    { tittle: 'Dinámicos', route: './reactive/dinamics' },
    { tittle: 'Switches', route: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    { tittle: 'Registro', route: './auth/register' },
    { tittle: 'Login', route: './auth/login' },
  ];
}
