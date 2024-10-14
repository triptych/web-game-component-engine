import { BaseComponent } from './base-component.js';

export class TabbedPanel extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.activeTab = 'components';
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    width: 250px;
                    background-color: #f8f9fa;
                    border-left: 1px solid var(--border-color);
                }
                .tabs {
                    display: flex;
                    border-bottom: 1px solid var(--border-color);
                }
                .tab {
                    padding: 10px;
                    cursor: pointer;
                    background-color: #e9ecef;
                    border: none;
                    outline: none;
                }
                .tab.active {
                    background-color: #f8f9fa;
                    border-bottom: 2px solid var(--primary-color);
                }
                .tab-content {
                    flex: 1;
                    overflow-y: auto;
                }
            </style>
            <div class="tabs">
                <button class="tab ${this.activeTab === 'components' ? 'active' : ''}" data-tab="components">Components</button>
                <button class="tab ${this.activeTab === 'inspector' ? 'active' : ''}" data-tab="inspector">Inspector</button>
            </div>
            <div class="tab-content">
                ${this.activeTab === 'components'
                    ? '<component-list></component-list>'
                    : '<component-inspector></component-inspector>'}
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.activeTab = e.target.dataset.tab;
                this.render();
            });
        });
    }
}

customElements.define('tabbed-panel', TabbedPanel);
