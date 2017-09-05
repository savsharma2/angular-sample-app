import {Component} from '@angular/core';
import {HeroService} from '../../services/hero.service'
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
   providers: [HeroService]

})
export class AppComponent {
  title = 'Tour of Heroes';
}