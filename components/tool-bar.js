import { BaseComponent } from './base-component.js';

export class ToolBar extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    background-color: var(--primary-color);
                    color: white;
                }
                .logo {
                    height: 30px;
                    margin-right: 20px;
                }
                button {
                    padding: 5px 10px;
                    margin: 0 5px;
                    cursor: pointer;
                    background-color: var(--secondary-color);
                    color: white;
                    border: none;
                    border-radius: 3px;
                }
            </style>
            <img src="img/wgce.png" alt="WGCE Logo" class="logo">
            <div>
                <button id="save-btn">Save</button>
                <button id="load-btn">Load</button>
                <button id="export-btn">Export</button>
                <button id="import-btn">Import</button>
                <button id="reset-btn">Reset</button>
                <button id="rerender-btn">Rerender Grid</button>
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.getElementById('save-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('save', { bubbles: true, composed: true }));
        });

        this.shadowRoot.getElementById('load-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('load', { bubbles: true, composed: true }));
        });

        this.shadowRoot.getElementById('export-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('export', { bubbles: true, composed: true }));
        });

        this.shadowRoot.getElementById('import-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('import', { bubbles: true, composed: true }));
        });

        this.shadowRoot.getElementById('reset-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('reset', { bubbles: true, composed: true }));
        });

        this.shadowRoot.getElementById('rerender-btn').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('rerender-grid', { bubbles: true, composed: true }));
        });
    }
}

customElements.define('tool-bar', ToolBar);
