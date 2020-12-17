import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get('http://localhost:3000/heroesAct').pipe(map(data => {
      return data;
    }));
  }

  addHeroe(data){
    return this.http.post<any>('http://localhost:3000/heroe', data);
  }

  getHero(id){   
    return this.http.get(`http://localhost:3000/heroe/${id}`).pipe(map(data => {
      console.log('choche', data);
      
      return data;
    }));      
  }

  getheroTerm(term){
    return  this.http.get(`http://localhost:3000/heroesTerm?termino=${term}`).pipe(map(data => {
      return data;
    }))
  }

}
