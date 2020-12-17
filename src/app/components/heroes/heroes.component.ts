import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
// import { HeroService } from 'src/app/services/hero.services';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor( private _heroService: HeroesService, private _aRouter: Router) {
    // console.log('Constructor de la clase');
   }

  ArrayHeroes: any = [];

  ngOnInit(): void {
    this._heroService.getHeroes().subscribe((data: any) => {
      this.ArrayHeroes = data;
      console.log(this.ArrayHeroes);      
    });
  }
  // ngOnInit(): void {
  //   this.ArrayHeroes = this._heroService.getHeroes();
  // }

  ngDoCheck(){
    console.log('Evento DoCheck');
  }

  ngAfterContentInit(){
    console.log('Evento AfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('Evento AfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('Evento AfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('Evento AfterViewChecked');
  }

  ngOnDestroy(){
    console.log('Evento OnDestroy');
  }

  Navegar(index){
    console.log('index');
    this._aRouter.navigate(['/hero', index])
  }

}

