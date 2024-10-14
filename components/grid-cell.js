import { BaseComponent } from './base-component.js';
import { Player } from '../game-components/player.js';
import { Enemy } from '../game-components/enemy.js';
import { Platform } from '../game-components/platform.js';
import { Coin } from '../game-components/coin.js';
import { Button } from '../game-components/button.js';

export class GridCell extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentComponent = null;
        console.log('GridCell constructed');
    }

    render() {
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
            this.currentComponent = componentElement;
            console.log(`GridCell: Component ${componentName} added to container`);
        }
    }

    getComponent() {
        return this.currentComponent;
    }

    updateComponent(updatedComponent) {
        console.log('GridCell: Updating component', updatedComponent);
        if (this.currentComponent && this.currentComponent.constructor.name === updatedComponent.constructor.name) {
            // Update properties of the current component
            Object.assign(this.currentComponent, updatedComponent);

            // If the component has an update method, call it
            if (typeof this.currentComponent.update === 'function') {
                this.currentComponent.update();
            }

            console.log('GridCell: Component updated successfully');
        } else {
            console.error('GridCell: Cannot update component. Types do not match or no component exists.');
        }
    }

    clearComponent() {
        console.log('GridCell: Clearing component');
        const container = this.shadowRoot.querySelector('.component-container');
        container.innerHTML = ''; // Clear the container
        this.currentComponent = null;
        console.log('GridCell: Component cleared successfully');
    }
}

customElements.define('grid-cell', GridCell);
