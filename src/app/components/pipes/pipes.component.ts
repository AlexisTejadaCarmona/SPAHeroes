import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  VideoUrl = 'https://www.youtube.com/embed/crXjkY1QBck';
  NombreAlterno: string = 'AlExIs TeJaDa CaRmOnA';
  Nombre: string = 'Alexis Tejada Carmona';
  ArrayPrueba = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  PI = Math.PI;
  Fecha = new Date();
  Precio = 199.99;
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
