import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model'; // Import the Movie model or interface
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.movie = data.movie; // Get the movie data from the resolved data
    });
  }
}

