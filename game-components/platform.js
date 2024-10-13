export class Platform extends HTMLElement {
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
                    display: block;
                    width: 64px;
                    height: 16px;
                    background-color: green;
                }
            </style>
        `;
    }

    // Add platform-specific methods here
    setSize(width, height) {
        this.style.width = `${width}px`;
        this.style.height = `${height}px`;
    }
}

customElements.define('game-platform', Platform);
