import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movies.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'api/Movies';

  constructor(private loggingService: LoggingService, private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    this.loggingService.addLog('Listing Movies');
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovie(id: number): Observable<Movie | undefined> {
    this.loggingService.addLog(`Detail movie by ${id}`);
    return this.http.get<Movie>(this.apiUrl + '/' + id);
  }

  addMovie(movie: Movie): Observable<Movie> {

    return this.http.post<Movie>(this.apiUrl ,movie);

  }

  updateMovie(movie: Movie): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders( {'content-type': 'application/json'} )
    };

    return this.http.put(this.apiUrl, movie, httpOption);
  }

  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(this.apiUrl + '/' + movie.id);
  }
}
