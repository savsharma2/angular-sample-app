import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from '../models/hero'
import { from } from "rxjs/observable/from";
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map";
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatAll';
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) {}

  /**
   * Method to Get Heroes
   * @returns Observable<Hero>
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl).map(response => {
      let heroes:Hero[] = response.json().data as Hero[];
      //  return from(heroes).map(hero => {
      //     return Observable.of(hero).delay(100);
      // }).concatAll();
      return heroes;
      // return from(heroes).map(hero => {
      //     return Observable.of(hero).delay(100);
      // }).concatAll();
    });
    // return from(HEROES).map(hero => {
    //   return Observable.of(hero).delay(100);
    // }).concatAll();
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get(`${this.heroesUrl}/${id}`).map(response => {
      const hero:Hero = response.json().data as Hero;
      return hero;
    });
    // return from(HEROES).map(hero => {
    //   return Observable.of(hero).delay(100);
    // }).concatAll();
  } 
  
async getHeroAsync(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  const response = await this.http.get(url).toPromise();

  return response.json().data as Hero;
  // return this.getHeroesAsync()
  //            .then(heroes => heroes.find((hero: Hero) => hero.id === id));
}

// private handleError(error: any): Promise<any> {
//   console.error('An error occurred', error); // for demo purposes only
//   return Promise.reject(error.message || error);
// }

  async getHeroesAsync(): Promise<Hero[]> {
    // const delay = new Promise(function(resolve, reject){
    //  setTimeout(function(){
    //   resolve(HEROES);
    // }, 10000);
  // });
  const url = `${this.heroesUrl}`;
  const response = await this.http.get(url).toPromise();

  return response.json().data as Hero[];
  }
  
  update(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .map(response => {
        return response.json() as Hero;
      });
  }

  create(name: string): Observable<Hero> {
    const url = `${this.heroesUrl}`;
    return this.http
      .post(url, JSON.stringify({name}), {headers: this.headers})
      .map(response => {
        return response.json().data as Hero;
      });
  }

  handleError(error: Error) {
    console.error(error);
  }
}
