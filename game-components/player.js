class Player extends HTMLElement {
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
                    width: 32px;
                    height: 32px;
                    background-color: blue;
                    border-radius: 50%;
                }
            </style>
        `;
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
