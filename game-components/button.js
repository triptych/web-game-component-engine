export class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.action = 'None';
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
                .action {
                    font-size: 10px;
                    margin-top: 4px;
                    text-align: center;
                    color: #333;
                }
            </style>
            <button><slot>Button</slot></button>
            <div class="action">Action: ${this.action}</div>
        `;
    }

    addEventListeners() {
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('button-click', {
                bubbles: true,
                composed: true,
                detail: { action: this.action }
            }));
        });
    }

    update() {
        console.log('Button: Updating with action:', this.action);
        const actionElement = this.shadowRoot.querySelector('.action');
        if (actionElement) {
            actionElement.textContent = `Action: ${this.action}`;
        }
    }

    // Add button-specific methods here
    setLabel(label) {
        const button = this.shadowRoot.querySelector('button');
        button.textContent = label;
    }

    setAction(action) {
        this.action = action;
        this.update();
    }
}

customElements.define('game-button', Button);
