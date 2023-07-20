import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.css']
})
export class FeaturedMoviesComponent {
  featuredMovies = [
    {
      id: 1,
      title: 'Movie 1',
      genre: 'Action',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
    },
    {
      id: 2,
      title: 'Movie 2',
      genre: 'Comedy',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg'
    },
    // Add more movie data as needed
  ];
}
