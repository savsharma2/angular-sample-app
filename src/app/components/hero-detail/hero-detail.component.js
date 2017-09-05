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
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/first");
const hero_service_1 = require("../../services/hero.service");
const hero_1 = require("../../models/hero");
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
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
                .switchMap((params) => {
                return this.heroService.getHero(+params.get("id"));
            }).subscribe((hero) => {
                this.hero = hero;
            });
        });
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.update(this.hero).take(1)
            .subscribe(() => {
            this.goBack();
        });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './hero-detail.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map