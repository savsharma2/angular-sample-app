"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms"); // <-- NgModel lives here
// import { ReactiveFormsModule } from '@angular/forms';
const app_component_1 = require("./components/app/app.component");
const heroes_component_1 = require("./components/heroes/heroes.component");
const hero_detail_component_1 = require("./components/hero-detail/hero-detail.component");
const dashboard_component_1 = require("./components/dashboard/dashboard.component");
const app_routing_module_1 = require("./routes/app-routing.module");
const http_1 = require("@angular/http");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
const in_memory_data_service_1 = require("./services/in-memory-data.service/in-memory-data.service");
require("./custom-elements/app-logo.element");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            // ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboard_component_1.DashboardComponent
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map