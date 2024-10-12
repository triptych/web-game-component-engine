class DeleteButton extends HTMLElement {
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

        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('delete', { bubbles: true, composed: true }));
        });
    }
}

customElements.define('delete-button', DeleteButton);
