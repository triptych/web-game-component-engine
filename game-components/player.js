export class Player extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.speed = 5;
        this.health = 100;
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
                    background-color: blue;
                    border-radius: 50%;
                    position: relative;
                }
                .health-bar {
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: #ddd;
                }
                .health-bar-fill {
                    height: 100%;
                    width: ${this.health}%;
                    background-color: green;
                }
            </style>
            <div class="health-bar">
                <div class="health-bar-fill"></div>
            </div>
        `;
    }

    update() {
        console.log('Player: Updating with speed:', this.speed, 'and health:', this.health);
        const healthBarFill = this.shadowRoot.querySelector('.health-bar-fill');
        if (healthBarFill) {
            healthBarFill.style.width = `${this.health}%`;
        }
        // You could add more visual updates based on speed here if needed
    }

    // Add player-specific methods here
    moveLeft() {
        console.log('Player moving left');
    }

    moveRight() {
        console.log('Player moving right');
    }

    jump() {
        console.log('Player jumping');
    }
}

customElements.define('game-player', Player);
