import { BaseComponent } from './base-component.js';

class ZoomControl extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                button {
                    font-size: 1.2rem;
                    padding: 0.25rem 0.5rem;
                    margin: 0 0.25rem;
                }
            </style>
            <button id="zoom-out">-</button>
            <span id="zoom-level">100%</span>
            <button id="zoom-in">+</button>
        `;
    }

    addEventListeners() {
        const zoomIn = this.shadowRoot.getElementById('zoom-in');
        const zoomOut = this.shadowRoot.getElementById('zoom-out');

        zoomIn.addEventListener('click', () => this.zoom('in'));
        zoomOut.addEventListener('click', () => this.zoom('out'));
    }

    zoom(direction) {
        const event = new CustomEvent('zoom', {
            bubbles: true,
            composed: true,
            detail: { direction }
        });
        this.dispatchEvent(event);
    }
}

customElements.define('zoom-control', ZoomControl);
