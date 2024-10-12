class GameEditor extends HTMLElement {
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
                    display: grid;
                    grid-template-columns: 250px 1fr 250px;
                    height: 100%;
                }
            </style>
            <slot></slot>
        `;
    }
}

customElements.define('game-editor', GameEditor);
