import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit, OnChanges, DoCheck {

  constructor(private _router: Router) {
    console.log('Constructor de Card');
    this.selectedHero = new EventEmitter();
  }

  @Input() PadreHero: any = {};
  @Input() Index: number;

  @Output() selectedHero: EventEmitter<number>;

  ngOnChanges(){
    console.log('Evento ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Evento ngOnInit');
  }

  ngDoCheck(){
    console.log('Evento ngDoCheck');
  }

  Navegar(){
    this._router.navigate(['/hero', this.Index]);

  }

}
