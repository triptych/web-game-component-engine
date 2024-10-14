import { BaseComponent } from './base-component.js';

class DeleteButton extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #e74c3c;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #c0392b;
                }
            </style>
            <button>Delete Component</button>
        `;
    }

    addEventListeners() {
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('delete', { bubbles: true, composed: true }));
        });
    }
}

customElements.define('delete-button', DeleteButton);
