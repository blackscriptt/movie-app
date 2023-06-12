import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/models/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  movie?: Movie;

  constructor( private movieService: MovieService, private route: ActivatedRoute, private location: Location ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovie(id)
      .subscribe(x => {
        this.movie = x;
      });
  }


  update(): void {
    this.movieService.updateMovie(this.movie!)
      .subscribe( () => {
        this.location.back();
      });

  }

}
