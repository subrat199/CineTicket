import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { OffersComponentComponent } from './offers-component/offers-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,


    NavbarComponent,
    HomeComponentComponent,
    MoviesComponentComponent,
    OffersComponentComponent,
    ContactComponentComponent,
    MovieListComponent,
    MovieDetailsComponent,
    BookingFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
