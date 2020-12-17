import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HeroService } from 'src/app/services/hero.services';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(private _aRoute: ActivatedRoute, private _heroService: HeroesService) {
  }
  
  ngOnInit(): void {
    this._aRoute.params.subscribe( params => {
      console.log(params);
      this._heroService.getHero(params['id']).subscribe((data: any) => {
        this.hero = data
      })
      console.log(this.hero);        
    });
  }

}
