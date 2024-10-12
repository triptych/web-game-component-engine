class ComponentList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                }
                h2 {
                    margin-top: 0;
                }
            </style>
            <h2>Components</h2>
            <div id="component-container"></div>
        `;
        this.populateComponents();
    }

    populateComponents() {
        const container = this.shadowRoot.getElementById('component-container');
        const components = [
            { name: 'Player', category: 'Characters' },
            { name: 'Enemy', category: 'Characters' },
            { name: 'Platform', category: 'Environment' },
            { name: 'Coin', category: 'Items' },
            { name: 'Button', category: 'UI' },
        ];

        components.forEach(comp => {
            const item = document.createElement('component-item');
            item.setAttribute('name', comp.name);
            item.setAttribute('category', comp.category);
            container.appendChild(item);
        });
    }
}

customElements.define('component-list', ComponentList);
