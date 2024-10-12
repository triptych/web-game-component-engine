class GameGrid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.gridSize = 10;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: repeat(${this.gridSize}, 1fr);
                    grid-template-rows: repeat(${this.gridSize}, 1fr);
                    gap: 1px;
                    background-color: var(--border-color);
                    padding: 1px;
                }
            </style>
        `;

        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            const cell = document.createElement('grid-cell');
            this.shadowRoot.appendChild(cell);
        }

        this.addDropListener();
    }

    addDropListener() {
        this.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        this.addEventListener('drop', (e) => {
            e.preventDefault();
            const componentName = e.dataTransfer.getData('text');
            const cell = e.target.closest('grid-cell');
            if (cell) {
                cell.setComponent(componentName);
            }
        });
    }
}

customElements.define('game-grid', GameGrid);
