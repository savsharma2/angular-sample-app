import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from "@angular/router";
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Observable} from "rxjs/Observable";
import {ISubscription} from "rxjs/Subscription";

export class BaseComponent implements OnInit {

  protected alive: boolean = true;
  ngOnInit(): void {
       
  }

  ngOnDestroy(): void {
    console.log("unsubscribing base component");
    this.alive = false;
  }
}
