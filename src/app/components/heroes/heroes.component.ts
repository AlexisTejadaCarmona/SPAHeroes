import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private _heroService: HeroService, private _aRouter: Router) { }

  ArrayHeroes: any = [];

  ngOnInit(): void {
    this.ArrayHeroes = this._heroService.getHeroes();
    
  }

  Navegar(index){
    console.log('index');
    this._aRouter.navigate(['/hero', index])
  }

}

