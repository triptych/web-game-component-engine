export class Coin extends HTMLElement {
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
                    width: 16px;
                    height: 16px;
                    background-color: gold;
                    border-radius: 50%;
                    animation: spin 2s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
            </style>
        `;
    }

    // Add coin-specific methods here
    collect() {
        console.log('Coin collected');
        this.remove();
    }
}

customElements.define('game-coin', Coin);
