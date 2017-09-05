import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/first';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}
 
async ngOnInit(): Promise<void> {
  // 
  // try
  // {
  // const params:ParamMap = await this.route.paramMap.first().toPromise();
  // const heroId:number = +params.get("id");
  // this.hero = await this.heroService.getHeroAsync(heroId);
  // }
  // catch(error) {
  // console.error('An error occurred', error); // for demo purposes only
  // throw error;
  // }
  this.route.paramMap
    .switchMap((params: ParamMap) => {
     return this.heroService.getHero(+params.get("id"));
    }).subscribe((hero: Hero) => {
      this.hero = hero;
    });
}

goBack(): void {
  this.location.back();
}
save(): void {
  this.heroService.update(this.hero).take(1)
  .subscribe(() => {
    this.goBack();
  });
}
}
  