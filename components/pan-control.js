class PanControl extends HTMLElement {
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
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0.25rem;
                    width: 100px;
                }
                button {
                    padding: 0.25rem;
                }
            </style>
            <button id="pan-up">↑</button>
            <button id="pan-left">←</button>
            <button id="pan-right">→</button>
            <button id="pan-down">↓</button>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const directions = ['up', 'left', 'right', 'down'];
        directions.forEach(direction => {
            const button = this.shadowRoot.getElementById(`pan-${direction}`);
            button.addEventListener('click', () => this.pan(direction));
        });
    }

    pan(direction) {
        const event = new CustomEvent('pan', {
            bubbles: true,
            composed: true,
            detail: { direction }
        });
        this.dispatchEvent(event);
    }
}

customElements.define('pan-control', PanControl);
