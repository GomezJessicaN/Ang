import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { NgModule } from '@angular/core';



const app_routes: Routes = [
{ path: 'heroes', component: HeroesComponent },
{ path: 'heroe/:id', component: HeroeComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'heroes' }

];

NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export  const APP_ROUTING = RouterModule.forRoot(app_routes);
