class GameGrid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.gridSize = 10;
        console.log('GameGrid constructed');
    }

    connectedCallback() {
        this.render();
        console.log('GameGrid connected to DOM');
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
        console.log('GameGrid rendered');
    }

    addDropListener() {
        this.addEventListener('dragover', (e) => {
            e.preventDefault();
            console.log('GameGrid: Drag over event');
        });

        this.addEventListener('drop', (e) => {
            e.preventDefault();
            const componentName = e.dataTransfer.getData('text');
            console.log(`GameGrid: Drop event with component ${componentName}`);

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const cellWidth = rect.width / this.gridSize;
            const cellHeight = rect.height / this.gridSize;

            const col = Math.floor(x / cellWidth);
            const row = Math.floor(y / cellHeight);

            const cellIndex = row * this.gridSize + col;
            const cell = this.shadowRoot.querySelectorAll('grid-cell')[cellIndex];

            if (cell) {
                console.log(`GameGrid: Setting component ${componentName} to cell at (${col}, ${row})`);
                cell.setComponent(componentName);
            } else {
                console.log(`GameGrid: No valid cell found for drop at (${col}, ${row})`);
            }
        });

        console.log('GameGrid: Drop listeners added');
    }
}

customElements.define('game-grid', GameGrid);
