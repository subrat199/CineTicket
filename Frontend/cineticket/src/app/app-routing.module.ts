import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { OffersComponentComponent } from './offers-component/offers-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { EventsComponent } from './events/events.component';
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'movies', component: MoviesComponentComponent },
  { path: 'offers', component: OffersComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Redirect invalid URLs to the Home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
