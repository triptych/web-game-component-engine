export class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                button {
                    padding: 8px 16px;
                    font-size: 16px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #45a049;
                }
            </style>
            <button><slot>Button</slot></button>
        `;
    }

    addEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('button-click', { bubbles: true, composed: true }));
        });
    }

    // Add button-specific methods here
    setLabel(label) {
        const button = this.shadowRoot.querySelector('button');
        button.textContent = label;
    }
}

customElements.define('game-button', Button);
