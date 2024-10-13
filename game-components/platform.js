export class Platform extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.width = 64;
        this.height = 16;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: ${this.width}px;
                    height: ${this.height}px;
                    background-color: green;
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
            <div class="info">${this.width}x${this.height}</div>
        `;
    }

    update() {
        console.log('Platform: Updating with width:', this.width, 'and height:', this.height);
        this.style.width = `${this.width}px`;
        this.style.height = `${this.height}px`;
        const infoElement = this.shadowRoot.querySelector('.info');
        if (infoElement) {
            infoElement.textContent = `${this.width}x${this.height}`;
        }
    }

    // Add platform-specific methods here
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.update();
    }
}

customElements.define('game-platform', Platform);
