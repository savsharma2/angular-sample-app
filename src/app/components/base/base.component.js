"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseComponent {
    constructor() {
        this.alive = true;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        console.log("unsubscribing base component");
        this.alive = false;
    }
}
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map