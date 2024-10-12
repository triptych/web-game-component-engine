class Enemy extends HTMLElement {
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
                    background-color: red;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }
            </style>
        `;
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
