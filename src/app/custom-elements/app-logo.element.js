// Extend the base HTMLElement class
// in es5 you would instread do Object.create(HTMLElement)
class AppLogo extends HTMLElement {
    // when make use of the contructor be sure to call super!
    constructor() {
        super();
        // define our private properties and types
        // this will be our private value that we store
        // typescript lets us predefine what type we are going to store here
        this._src = '';
        // fire our custom event when the image is clicked.
        this.addEventListener('click', (event) => {
            // create our event object
            const eventObj = new CustomEvent('logoClicked');
            let currentTarget = event.currentTarget;
            if (currentTarget.tagName === 'APP-LOGO') {
                this.dispatchEvent(eventObj);
            }
        });
    }
    // define our property getter
    // this sinmply returns our private value
    get src() {
        return this._src;
    }
    // define our property setter
    // this is how we tell our element to render when it receives new data
    // this will trigger a rerender when something changes
    set src(value) {
        if (this._src !== value) {
            this._src = value;
            this.render();
        }
    }
    // render our component to the DOM
    // render and renderString are where we could be clever
    // but for now we are just going to write the string to innerHTML
    render() {
        this.innerHTML = this.renderString();
    }
    // just returns a string;
    renderString() {
        return `
        <div>
          Logo Using Web component
          <img src="${this.src}" >
        </div>
      `;
    }
}
// Register our element with the custom elements API
window.customElements.define('app-logo', AppLogo);
//# sourceMappingURL=app-logo.element.js.map