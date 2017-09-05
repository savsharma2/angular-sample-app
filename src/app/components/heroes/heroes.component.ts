import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Observable } from "rxjs/Observable";
import { ISubscription } from "rxjs/Subscription";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/concat";
import { from } from "rxjs/observable/from";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/fromEvent';

import { BaseComponent } from '../base/base.component'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent extends BaseComponent {
  heroes$: Observable<Hero[]>;
  mergedHeroes$: Observable<Hero>;

  selectedHero: Hero;
  subscription: ISubscription;
  elementRef: ElementRef;
  heroName: string;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router,
    private ngZone: NgZone, elementRef: ElementRef) {
    super();
    this.elementRef = elementRef;
  }

  getHeroes(): Observable<Hero[]> {
    return this.heroService.getHeroes();
  }
  gotoDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }
  ngOnInit(): void {
    this.heroes$ = this.getHeroes().share();
    let input = this.elementRef.nativeElement.querySelector(".add-hero");
    let getHeroes$: Observable<Hero[]> = this.getHeroes();
    let addHero$: Observable<Hero[]> = Observable.fromEvent(input, "click").switchMap(name => {
      return this.heroService.create(this.heroName);
    }).map((hero: Hero) => {
      this.heroName = "";
      return [hero];
    });
    
    this.mergedHeroes$ = getHeroes$.merge(addHero$).map((heroes: Hero[]) => {
      return from(heroes).map(hero => {
            return Observable.of(hero).delay(500);
        }).concatAll();
    }).concatAll().takeWhile(() => this.alive);

    this.mergedHeroes$.subscribe((hero: Hero) => {
      this.heroes.push(hero);
      
    })
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.heroes = [];
  // }

}
