import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/models/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  getMovie: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe( x => {
        this.getMovie = x;
      });
  }

  subStrDecription(item: any): string {
    let lengthDesc = Number(item.length);
    let text: string;

    if(lengthDesc > 130) {
      text = item.substring(0, 130) + '...';
    } else {
      text = item;
    }
    return text;
  }


  deleteMovie(movie: Movie): void {
    this.getMovie = this.getMovie.filter(x => x !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }

}
