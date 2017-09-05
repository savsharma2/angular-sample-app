"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/delay");
require("rxjs/add/observable/of");
require("rxjs/add/operator/concatAll");
let HeroService = class HeroService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    /**
     * Method to Get Heroes
     * @returns Observable<Hero>
     */
    getHeroes() {
        return this.http.get(this.heroesUrl).map(response => {
            let heroes = response.json().data;
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
    getHero(id) {
        return this.http.get(`${this.heroesUrl}/${id}`).map(response => {
            const hero = response.json().data;
            return hero;
        });
        // return from(HEROES).map(hero => {
        //   return Observable.of(hero).delay(100);
        // }).concatAll();
    }
    getHeroAsync(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.heroesUrl}/${id}`;
            const response = yield this.http.get(url).toPromise();
            return response.json().data;
            // return this.getHeroesAsync()
            //            .then(heroes => heroes.find((hero: Hero) => hero.id === id));
        });
    }
    // private handleError(error: any): Promise<any> {
    //   console.error('An error occurred', error); // for demo purposes only
    //   return Promise.reject(error.message || error);
    // }
    getHeroesAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            // const delay = new Promise(function(resolve, reject){
            //  setTimeout(function(){
            //   resolve(HEROES);
            // }, 10000);
            // });
            const url = `${this.heroesUrl}`;
            const response = yield this.http.get(url).toPromise();
            return response.json().data;
        });
    }
    update(hero) {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .map(response => {
            return response.json();
        });
    }
    create(name) {
        const url = `${this.heroesUrl}`;
        return this.http
            .post(url, JSON.stringify({ name }), { headers: this.headers })
            .map(response => {
            return response.json().data;
        });
    }
    handleError(error) {
        console.error(error);
    }
};
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map