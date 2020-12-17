import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HeroService } from './../../services/hero.services';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRoute: ActivatedRoute, private _heroService: HeroesService) { }
  Resultados: any = [];
  strBusqueda = '';

  ngOnInit(): void {
    this._aRoute.params.subscribe( params => {
      this.strBusqueda = params['termino'];
      this._heroService.getheroTerm(params['termino']).subscribe((data: any) => {
        this.Resultados = data;
      });
      console.log(this.Resultados);
    });
  }

}
