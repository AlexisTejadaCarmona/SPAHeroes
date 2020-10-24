import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';

import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    ErrorComponent,
    HeroComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'heroes', component: HeroesComponent},
      {path: 'about', component: AboutComponent},
      {path: 'hero/:id', component: HeroComponent},
      {path: 'results/:termino', component: BuscadorComponent},
      {path: '**', component: ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
