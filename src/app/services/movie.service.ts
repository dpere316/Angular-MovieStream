import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movies} from '../models/Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=99014c3970c401e157b58c33cd0e7423&language=en-US&page=1';

  constructor(private http: HttpClient) { }

  getMovie(): Observable<Movies[]> {

    return this.http.get<Movies[]>(this.movieUrl);
  }
}
