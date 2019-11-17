class Engine {
    constructor(bootstrap) {
        this.globalThis = window.this;
        this.app = bootstrap;
        this.selector = this.app.selector;
        this.dataInit = this.app.data.bind(this);
        this.actionsInit = this.app.actions.bind(this);
        this.templateInit = this.app.template.bind(this);
        this.afterViewLoadedInit = this.app.afterViewLoaded.bind(this);
        this.data;
        this.actions;
        this.template;
        this.afterViewLoaded;
        this.initialise();
    }

    initialise() {
        this.data = this.dataInit();
        this.actions = this.actionsInit();
        this.template = this.templateInit();
        this.afterViewLoaded = this.afterViewLoadedInit;
        this.render(this.template);
    }

    render(template) {

        console.log(this.template);

        const buildTemplate = (template) => {
            return new Promise((resolve, reject) => {
                if (this.select(!this.app.selector)) {
                    customElements.define(this.app.selector, class extends HTMLElement {
                        connectedCallback() {
                          this.innerHTML = template;
                          resolve();
                        }
                      });
                } else {
                    this.select(this.app.selector).innerHTML = template;
                    resolve();
                }
            });
        }
        buildTemplate(template).then(() => {
            this.afterViewLoaded();
        });
    }

    select(element) {
        return document.querySelector(element);
    }
}

 new Engine({
    
    selector: 'my-element',

    data() {
        return {
            myOutput: 'None'
        }
    },

    actions() {
        return {
            logInput: (event) => {
                // console.log(event)
                // console.log(this.data);
                this.data.myOutput = event;
                console.log(this.data.myOutput);
                this.render(this.template);
            }
        }
    },

    template() {
        return (`<div>
            my template<br/>
            ${this.data.myOutput}
            <input type="text" id="abc" />
            
                </div>`);
    },

    afterViewLoaded() {
            this.select('#abc').addEventListener('change', (e) => {
                // console.log(e.);
                this.actions.logInput(event.target.value)
            })
    }

})
