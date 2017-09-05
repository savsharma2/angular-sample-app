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
const hero_service_1 = require("../../services/hero.service");
const base_component_1 = require("../base/base.component");
require("rxjs/add/operator/take");
let DashboardComponent = class DashboardComponent extends base_component_1.BaseComponent {
    constructor(heroService) {
        super();
        this.heroService = heroService;
        this.heroes = [];
        this.logoSrc = 'https://i.ebayimg.com/images/g/GsoAAOSw7ThUirGs/s-l300.jpg';
    }
    ngOnInit() {
        this.heroService.getHeroes().takeWhile(() => this.alive).subscribe((heroes) => {
            this.heroes = heroes;
        });
    }
    onLogoClicked() {
        debugger;
        window.alert('THE LOGO WAS CLICKED!');
    }
};
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ["./dashboard.component.css"],
        encapsulation: core_1.ViewEncapsulation.Native
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map