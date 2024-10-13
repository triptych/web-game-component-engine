import { Player } from '../game-components/player.js';
import { Enemy } from '../game-components/enemy.js';
import { Platform } from '../game-components/platform.js';
import { Coin } from '../game-components/coin.js';
import { Button } from '../game-components/button.js';

class GridCell extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #90EE90;
                }
                .component-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            </style>
            <div class="component-container"></div>
        `;
        console.log('GridCell constructed');
    }

    connectedCallback() {
        this.render();
        console.log('GridCell connected to DOM');
    }

    render() {
        // The initial render is now handled in the constructor
        console.log('GridCell rendered');
    }

    setComponent(componentName) {
        console.log(`GridCell: Setting component ${componentName}`);
        const container = this.shadowRoot.querySelector('.component-container');
        container.innerHTML = ''; // Clear existing content

        let componentElement;
        switch (componentName) {
            case 'Player':
                componentElement = new Player();
                break;
            case 'Enemy':
                componentElement = new Enemy();
                break;
            case 'Platform':
                componentElement = new Platform();
                break;
            case 'Coin':
                componentElement = new Coin();
                break;
            case 'Button':
                componentElement = new Button();
                break;
            default:
                console.error(`Unknown component: ${componentName}`);
                return;
        }

        if (componentElement) {
            container.appendChild(componentElement);
            console.log(`GridCell: Component ${componentName} added to container`);
        }
    }
}

customElements.define('grid-cell', GridCell);
