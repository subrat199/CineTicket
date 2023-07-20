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
;
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';

@NgModule({
  declarations: [
    AppComponent,


    NavbarComponent,
    HomeComponentComponent,
    MoviesComponentComponent,
    OffersComponentComponent,
    ContactComponentComponent,
 
    FooterComponent,
      EventsComponent,
      BannerComponent,
      FeaturedMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
