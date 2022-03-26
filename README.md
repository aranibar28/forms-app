# FormsApp

Los formularios son una característica muy común que se usan en cualquier aplicación.

## Características

- Los formularios basados ​​en plantillas utilizan el “FormsModule”, mientras que los formularios reactivos se basan en “ReactiveFormsModule”.

- Los formularios basados ​​en plantillas son de naturaleza asincrónica, mientras que los formularios reactivos son en su mayoría sincrónicos.

- En un enfoque basado en plantillas, la mayor parte de la lógica se basa en la plantilla, mientras que en el enfoque basado en reactivos, la lógica reside principalmente en el componente .

## Instalación

    npm install
    ng serve -o
    json-server --watch db.json


## Formularios por aproximación por Template

`template.module.ts`

    import { FormsModule } from '@angular/forms';

    @NgModule({
        imports: [FormsModule],
    })

`example.component.html`

    <form #myForm="ngForm" (ngSubmit)="guardar()">
    ...
    </form>


## Formularios Reactivos

`reactive.module.ts`

    import { ReactiveFormsModule } from '@angular/forms';

    @NgModule({
        imports: [ReactiveFormsModule],
    })

`example.component.html`

    <form [formGroup]="myForm" (ngSubmit)="guardar()">
    ...
    </form>
    