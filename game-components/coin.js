export class Coin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.value = 1;
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
                    position: relative;
                }
                @keyframes spin {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                .value {
                    position: absolute;
                    bottom: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 10px;
                    white-space: nowrap;
                    color: black;
                    background-color: rgba(255, 255, 255, 0.7);
                    padding: 2px 4px;
                    border-radius: 4px;
                }
            </style>
            <div class="value">${this.value}</div>
        `;
    }

    update() {
        console.log('Coin: Updating with value:', this.value);
        const valueElement = this.shadowRoot.querySelector('.value');
        if (valueElement) {
            valueElement.textContent = this.value;
        }
    }

    // Add coin-specific methods here
    collect() {
        console.log('Coin collected');
        this.remove();
    }
}

customElements.define('game-coin', Coin);
