import { BaseComponent } from './base-component.js';

class ComponentItem extends BaseComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    render() {
        const name = this.getAttribute('name');
        const category = this.getAttribute('category');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    align-items: center;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    margin-bottom: 0.5rem;
                    cursor: move;
                }
                .icon {
                    width: 24px;
                    height: 24px;
                    margin-right: 0.5rem;
                    background-color: var(--primary-color);
                }
            </style>
            <div class="icon"></div>
            <div>
                <div>${name}</div>
                <small>${category}</small>
            </div>
        `;
    }

    addEventListeners() {
        this.addDragListeners();
    }

    addDragListeners() {
        this.setAttribute('draggable', 'true');
        this.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', this.getAttribute('name'));
        });
    }
}

customElements.define('component-item', ComponentItem);
