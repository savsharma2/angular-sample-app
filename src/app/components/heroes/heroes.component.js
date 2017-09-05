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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const hero_service_1 = require("../../services/hero.service");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/takeWhile");
require("rxjs/add/operator/merge");
require("rxjs/add/operator/concat");
const from_1 = require("rxjs/observable/from");
require("rxjs/add/operator/do");
require("rxjs/add/operator/share");
require("rxjs/add/observable/fromEvent");
const base_component_1 = require("../base/base.component");
let HeroesComponent = class HeroesComponent extends base_component_1.BaseComponent {
    constructor(heroService, router, ngZone, elementRef) {
        super();
        this.heroService = heroService;
        this.router = router;
        this.ngZone = ngZone;
        this.heroes = [];
        this.elementRef = elementRef;
    }
    getHeroes() {
        return this.heroService.getHeroes();
    }
    gotoDetail(id) {
        this.router.navigate(['/detail', id]);
    }
    ngOnInit() {
        this.heroes$ = this.getHeroes().share();
        let input = this.elementRef.nativeElement.querySelector(".add-hero");
        let getHeroes$ = this.getHeroes();
        let addHero$ = Observable_1.Observable.fromEvent(input, "click").switchMap(name => {
            return this.heroService.create(this.heroName);
        }).map((hero) => {
            this.heroName = "";
            return [hero];
        });
        this.mergedHeroes$ = getHeroes$.merge(addHero$).map((heroes) => {
            return from_1.from(heroes).map(hero => {
                return Observable_1.Observable.of(hero).delay(500);
            }).concatAll();
        }).concatAll().takeWhile(() => this.alive);
        this.mergedHeroes$.subscribe((hero) => {
            this.heroes.push(hero);
        });
    }
};
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        styleUrls: ["./heroes.component.css"]
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.Router,
        core_1.NgZone, core_1.ElementRef])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map