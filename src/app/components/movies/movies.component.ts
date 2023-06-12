import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/models/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  title = 'Movies List';
  movies: Movie[] = [];
  selectMovie: Movie | undefined;
  lengthMovies: number = 0;



  constructor(private movieService: MovieService) { }


  // constructor dan sonra çalışır
  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe( x => {
      this.movies = x.slice(0, 5);
      this.lengthMovies = x.length;
    });


    // 1. yol
    // this.getMovies();
  }

  // 2. yol
  // getMovies(): void {
  //   this.movieService.getMovie()
  //     .subscribe( x => {
  //         this.movies = x;
  //     });
  // }



  activMovie(movie: Movie): void {
    this.selectMovie = movie;
  }

  setName(name: string): void {
    if (this.selectMovie != null) {
      this.selectMovie.name = name;
    }
  }

  subStrDecription(item: any): string {
    let lengthDesc = Number(item.length);
    let text: string;

    if(lengthDesc > 200) {
      text = item.substring(0, 200) + '...';
    } else {
      text = item;
    }
    return text;
  }

  // movies: Movie[] = [
  //   { id: 1, name: 'Movie 1', },
  //   { id: 2, name: 'Movie 2', },
  //   { id: 3, name: 'Movie 3', }
  //  ];


  // Class oluşturuldu ve class ın içinde oluşturulan değişkneler kullanıldı. (Entitiy)
  // movie: Movie = {
  //   id: 1,
  //   name: 'Kaan'
  // }

}
