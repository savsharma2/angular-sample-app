import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import { BaseComponent } from '../base/base.component';
import 'rxjs/add/operator/take';

@Component({
  selector: 'my-dashboard',
  templateUrl:  './dashboard.component.html',
  styleUrls:["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.Native   
})
export class DashboardComponent extends BaseComponent implements OnInit { 
  heroes: Hero[] = [];
  logoSrc: string = 'https://i.ebayimg.com/images/g/GsoAAOSw7ThUirGs/s-l300.jpg';
  constructor(private heroService: HeroService) { super();}
   ngOnInit(): void {
    this.heroService.getHeroes().takeWhile(() => this.alive).subscribe((heroes:Hero[]) => {
        this.heroes = heroes;
    });
  }
  onLogoClicked() {
    debugger;
    window.alert('THE LOGO WAS CLICKED!');
  }
}