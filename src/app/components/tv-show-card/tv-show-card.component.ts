import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.css']
})
export class TvShowCardComponent implements OnInit {

  tvShow: [];

  constructor(private movieService: MovieService) { }

  ngOnInit(){

    return this.movieService.getTvShows().subscribe((data: []) => {
      this.tvShow = data;
      console.warn('tvshows' , this.tvShow);
    });

  }
}
