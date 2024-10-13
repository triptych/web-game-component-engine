class GameEditor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.components = [];
        this.selectedComponent = null;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: 250px 1fr 250px;
                    grid-template-rows: auto 1fr;
                    height: 100%;
                }
                tool-bar {
                    grid-column: 1 / -1;
                }
            </style>
            <tool-bar></tool-bar>
            <component-list></component-list>
            <game-grid></game-grid>
            <component-inspector></component-inspector>
        `;
    }

    setupEventListeners() {
        this.shadowRoot.addEventListener('component-selected', this.handleComponentSelected.bind(this));
        this.shadowRoot.addEventListener('component-placed', this.handleComponentPlaced.bind(this));
        this.shadowRoot.addEventListener('component-delete', this.handleComponentDelete.bind(this));
        this.shadowRoot.addEventListener('component-updated', this.handleComponentUpdated.bind(this));
        this.shadowRoot.addEventListener('inspect-component', this.handleInspectComponent.bind(this));
    }

    handleComponentSelected(event) {
        const { component } = event.detail;
        this.selectedComponent = component;
        this.shadowRoot.querySelector('component-inspector').setComponent(component);
    }

    handleComponentPlaced(event) {
        const { component, x, y } = event.detail;
        const newComponent = { ...component, x, y };
        this.components.push(newComponent);
        this.updateGrid();
    }

    handleComponentDelete(event) {
        const { component } = event.detail;
        this.components = this.components.filter(c => c !== component);
        this.updateGrid();
        this.selectedComponent = null;
        this.shadowRoot.querySelector('component-inspector').setComponent(null);
    }

    handleComponentUpdated(event) {
        const { component } = event.detail;
        const index = this.components.findIndex(c => c === component);
        if (index !== -1) {
            this.components[index] = { ...component };
            this.updateGrid();
        }
    }

    handleInspectComponent(event) {
        const { component } = event.detail;
        this.shadowRoot.querySelector('component-inspector').setComponent(component);
    }

    updateGrid() {
        const grid = this.shadowRoot.querySelector('game-grid');
        grid.setComponents(this.components);
    }
}

customElements.define('game-editor', GameEditor);
