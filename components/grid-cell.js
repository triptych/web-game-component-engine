class GridCell extends HTMLElement {
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
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    cursor: pointer;
                }
            </style>
        `;
    }

    setComponent(componentName) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--secondary-color);
                    cursor: pointer;
                }
            </style>
            <div>${componentName}</div>
        `;
    }
}

customElements.define('grid-cell', GridCell);
