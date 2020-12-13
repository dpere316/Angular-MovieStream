import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {Movies} from '../../models/Movies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  movie: Movies[];

  constructor( private movieService: MovieService ) { }

  ngOnInit(){

    return this.movieService.getMovie().subscribe((data) => {
      this.movie = data;
      console.warn('res' , this.movie);
    });

  }

}
