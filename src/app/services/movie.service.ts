import { Injectable } from '@angular/core';

import {
  Observable,
  Subject
} from 'rxjs/Rx';

import { of } from 'rxjs/observable/of';

import {
  Http,
  Headers,
  RequestOptions,
  Response
} from '@angular/http'

import 'rxjs/add/operator/map';
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

  /** Movie list*/
  movies: any[];

  /** json file URL */
  private jsonFileURL: string = "../../assets/movies.json";

  /**
   * Movie constructor
   */
  constructor(private http: Http) {
  }

  /**
   * Returns the champhionship list
   */
  list(): any[] {
    return this.movies;
  }

  /**
   * Gets the list of movies
   */
  getMovies(): Observable<any[]> {
    return this.http.get(this.jsonFileURL).map((response: Response) => {
      return <any>response.json()
    }).catch(this.handleError);
  }

  /**
   * Gets Movie by Id
   */
  getMovieById(id: any): Observable<any> {
    return this.http.get(this.jsonFileURL).map((response: Response) => {
      return <any>response.json()[id - 1];
    }).catch(this.handleError);

  }

  /** 
   * Handles the response erros
   */
  private handleError(errorResponse: Response) {
    return Observable.throw(errorResponse.json().error || "Server error");
  }
}