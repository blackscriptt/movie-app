import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/models/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent {
  movies?: Movie[];
  imgUrl: string = "number.jpeg";


  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(x => {
        this.movies = x;
      });
  }

  MovieAdd(img: string, title: string, description: string): void {
    this.movieService.addMovie({
      img: img,
      name: title,
      description: description
    } as Movie).subscribe(x => this.movies?.push(x));
  }

}
