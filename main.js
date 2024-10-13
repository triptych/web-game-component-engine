import './components/game-editor.js';
import './components/component-list.js';
import './components/component-item.js';
import './components/game-grid.js';
import './components/grid-cell.js';
import './components/component-inspector.js';
import './components/inspector-field.js';
import './components/zoom-control.js';
import './components/pan-control.js';
import './components/delete-button.js';
import './components/tool-bar.js';

// Import game components
import './game-components/player.js';
import './game-components/enemy.js';
import './game-components/platform.js';
import './game-components/coin.js';
import './game-components/button.js';

document.addEventListener('DOMContentLoaded', () => {
    const gameEditor = document.querySelector('game-editor');
    const gameGrid = gameEditor.querySelector('game-grid');
    const componentInspector = gameEditor.querySelector('component-inspector');
    const toolBar = gameEditor.querySelector('tool-bar');

    // Add zoom and pan controls to the game grid
    const zoomControl = document.createElement('zoom-control');
    const panControl = document.createElement('pan-control');
    gameGrid.prepend(zoomControl, panControl);

    // Handle zoom events
    gameEditor.addEventListener('zoom', (e) => {
        console.log('Zoom', e.detail.direction);
        // Implement zoom functionality here
    });

    // Handle pan events
    gameEditor.addEventListener('pan', (e) => {
        console.log('Pan', e.detail.direction);
        // Implement pan functionality here
    });

    // Handle component selection
    gameGrid.addEventListener('click', (e) => {
        const cell = e.target.closest('grid-cell');
        if (cell) {
            const component = cell.getComponent();
            componentInspector.setComponent(component);
        }
    });

    // Handle component deletion
    componentInspector.addEventListener('delete', () => {
        console.log('Delete component');
        // Implement delete functionality here
    });

    // Handle toolbar events
    toolBar.addEventListener('save', () => {
        console.log('Save game state');
        // Implement save functionality here
    });

    toolBar.addEventListener('load', () => {
        console.log('Load game state');
        // Implement load functionality here
    });

    toolBar.addEventListener('reset', () => {
        console.log('Reset game state');
        // Implement reset functionality here
    });
});
