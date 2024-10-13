export class Enemy extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.speed = 3;
        this.damage = 10;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 32px;
                    height: 32px;
                    background-color: red;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    position: relative;
                }
                .info {
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
            <div class="info">S:${this.speed} D:${this.damage}</div>
        `;
    }

    update() {
        console.log('Enemy: Updating with speed:', this.speed, 'and damage:', this.damage);
        const infoElement = this.shadowRoot.querySelector('.info');
        if (infoElement) {
            infoElement.textContent = `S:${this.speed} D:${this.damage}`;
        }
    }

    // Add enemy-specific methods here
    patrol() {
        console.log('Enemy patrolling');
    }

    attack() {
        console.log('Enemy attacking');
    }
}

customElements.define('game-enemy', Enemy);
