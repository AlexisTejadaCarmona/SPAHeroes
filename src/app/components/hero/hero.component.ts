import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.services';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroService) {
    this._aRoute.params.subscribe( params =>{
      console.log(params);
      this.hero = this._heroService.getHero(params['id'])
      console.log(this.hero);
      
    });
  }

  ngOnInit(): void {
  }

}
