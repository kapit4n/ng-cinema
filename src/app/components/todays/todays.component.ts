import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-todays',
  templateUrl: './todays.component.html',
  styleUrls: ['./todays.component.css']
})
export class TodaysComponent implements OnInit {

  movies: any[];
  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(championships => this.movies = championships )
  }

}
