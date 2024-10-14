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
import './components/tabbed-panel.js';

// Import game components
import './game-components/player.js';
import './game-components/enemy.js';
import './game-components/platform.js';
import './game-components/coin.js';
import './game-components/button.js';

document.addEventListener('DOMContentLoaded', () => {
    const gameEditor = document.querySelector('game-editor');

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
});
