import { GridCell } from './grid-cell.js';

class GameGrid extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.gridSize = 10;
        this.cells = [];
        this.components = [];
        console.log('GameGrid constructed');
    }

    connectedCallback() {
        this.render();
        this.addComponentUpdateListener();
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

        this.cells = [];
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            const cell = new GridCell();
            cell.addEventListener('click', (e) => this.handleCellClick(e, i));
            this.shadowRoot.appendChild(cell);
            this.cells.push(cell);
        }

        this.renderComponents();
        this.addDropListener();
        console.log('GameGrid rendered');
    }

    renderComponents() {
        this.cells.forEach(cell => cell.clearComponent());
        this.components.forEach(component => {
            const cellIndex = component.y * this.gridSize + component.x;
            if (cellIndex >= 0 && cellIndex < this.cells.length) {
                this.cells[cellIndex].setComponent(component.type);
            }
        });
    }

    setComponents(components) {
        this.components = components;
        this.renderComponents();
        console.log('GameGrid: Components updated', this.components);
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
            const cell = this.cells[cellIndex];

            if (cell) {
                console.log(`GameGrid: Setting component ${componentName} to cell at (${col}, ${row})`);
                const newComponent = { type: componentName, x: col, y: row };
                this.components.push(newComponent);
                cell.setComponent(componentName);
                this.updateComponentInspector(cellIndex);
                this.dispatchEvent(new CustomEvent('component-placed', {
                    bubbles: true,
                    composed: true,
                    detail: { component: newComponent }
                }));
            } else {
                console.log(`GameGrid: No valid cell found for drop at (${col}, ${row})`);
            }
        });

        console.log('GameGrid: Drop listeners added');
    }

    handleCellClick(e, index) {
        console.log(`GameGrid: Cell clicked at index ${index}`);
        this.updateComponentInspector(index);
    }

    updateComponentInspector(cellIndex) {
        const component = this.components.find(c => c.y * this.gridSize + c.x === cellIndex);
        this.dispatchEvent(new CustomEvent('inspect-component', {
            bubbles: true,
            composed: true,
            detail: { component }
        }));
    }

    addComponentUpdateListener() {
        this.addEventListener('component-updated', (event) => {
            const updatedComponent = event.detail.component;
            console.log('GameGrid: Component updated event received', updatedComponent);

            const index = this.components.findIndex(c => c.x === updatedComponent.x && c.y === updatedComponent.y);
            if (index !== -1) {
                this.components[index] = updatedComponent;
                this.renderComponents();
            } else {
                console.log('GameGrid: Could not find component to update');
            }
        });

        this.addEventListener('component-delete', (event) => {
            const deletedComponent = event.detail.component;
            console.log('GameGrid: Component delete event received', deletedComponent);

            this.components = this.components.filter(c => c !== deletedComponent);
            this.renderComponents();
        });

        console.log('GameGrid: Component update and delete listeners added');
    }
}

customElements.define('game-grid', GameGrid);
