import { BaseComponent } from './base-component.js';

export class GameEditor extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    width: 100%;
                }
                .editor-container {
                    display: flex;
                    flex: 1;
                    overflow: hidden;
                }
                game-grid {
                    flex: 1;
                }
            </style>
            <tool-bar></tool-bar>
            <div class="editor-container">
                <game-grid></game-grid>
                <tabbed-panel></tabbed-panel>
            </div>
        `;

        this.gameGrid = this.shadowRoot.querySelector('game-grid');
        this.tabbedPanel = this.shadowRoot.querySelector('tabbed-panel');
        this.toolBar = this.shadowRoot.querySelector('tool-bar');

        this.addEventListeners();
    }

    addEventListeners() {
        this.addEventListener('component-placed', (e) => {
            console.log('Component placed:', e.detail.component);
        });

        this.addEventListener('inspect-component', (e) => {
            const componentInspector = this.tabbedPanel.shadowRoot.querySelector('component-inspector');
            if (componentInspector) {
                componentInspector.setComponent(e.detail.component);
            }
        });

        this.toolBar.addEventListener('save', () => {
            console.log('Save game state');
            // Implement save functionality
        });

        this.toolBar.addEventListener('load', () => {
            console.log('Load game state');
            // Implement load functionality
        });

        this.toolBar.addEventListener('reset', () => {
            console.log('Reset game state');
            this.gameGrid.setComponents([]);
            const componentInspector = this.tabbedPanel.shadowRoot.querySelector('component-inspector');
            if (componentInspector) {
                componentInspector.setComponent(null);
            }
        });

        this.toolBar.addEventListener('rerender-grid', () => {
            console.log('Rerendering grid');
            this.gameGrid.rerenderComponents();
        });

        this.addEventListener('component-updated', (e) => {
            console.log('Component updated:', e.detail.component);
            this.gameGrid.updateComponent(e.detail.component);
        });

        this.addEventListener('component-delete', (e) => {
            console.log('Component deleted:', e.detail.component);
            this.gameGrid.deleteComponent(e.detail.component);
            const componentInspector = this.tabbedPanel.shadowRoot.querySelector('component-inspector');
            if (componentInspector) {
                componentInspector.setComponent(null);
            }
        });
    }
}

customElements.define('game-editor', GameEditor);
