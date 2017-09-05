import { NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
// import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './components/app/app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RouterModule }   from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './routes/app-routing.module'
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service/in-memory-data.service';
import './custom-elements/app-logo.element';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    // ReactiveFormsModule,
  AppRoutingModule,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
