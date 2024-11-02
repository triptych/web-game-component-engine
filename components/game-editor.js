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
            console.log('Saving game state');
            const gameState = {
                components: this.gameGrid.components,
                version: '1.0'
            };
            try {
                localStorage.setItem('gameState', JSON.stringify(gameState));
                console.log('Game state saved successfully');
            } catch (error) {
                console.error('Error saving game state:', error);
            }
        });

        this.toolBar.addEventListener('load', () => {
            console.log('Loading game state');
            try {
                const savedState = localStorage.getItem('gameState');
                if (savedState) {
                    const gameState = JSON.parse(savedState);
                    if (gameState.version === '1.0') {
                        this.gameGrid.setComponents(gameState.components);
                        console.log('Game state loaded successfully');
                    } else {
                        console.warn('Incompatible game state version');
                    }
                } else {
                    console.log('No saved game state found');
                }
            } catch (error) {
                console.error('Error loading game state:', error);
            }
        });

        this.toolBar.addEventListener('export', async () => {
            console.log('Exporting game state');
            const gameState = {
                components: this.gameGrid.components,
                version: '1.0'
            };

            try {
                const handle = await window.showSaveFilePicker({
                    suggestedName: 'game-layout.json',
                    types: [{
                        description: 'JSON Files',
                        accept: {
                            'application/json': ['.json'],
                        },
                    }],
                });

                const writable = await handle.createWritable();
                await writable.write(JSON.stringify(gameState, null, 2));
                await writable.close();
                console.log('Game state exported successfully');
            } catch (error) {
                console.error('Error exporting game state:', error);
            }
        });

        this.toolBar.addEventListener('import', async () => {
            console.log('Importing game state');
            try {
                const [fileHandle] = await window.showOpenFilePicker({
                    types: [{
                        description: 'JSON Files',
                        accept: {
                            'application/json': ['.json'],
                        },
                    }],
                });

                const file = await fileHandle.getFile();
                const content = await file.text();
                const gameState = JSON.parse(content);

                if (gameState.version === '1.0') {
                    this.gameGrid.setComponents(gameState.components);
                    console.log('Game state imported successfully');
                } else {
                    console.warn('Incompatible game state version');
                }
            } catch (error) {
                console.error('Error importing game state:', error);
            }
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
