class ComponentInspector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        console.log('ComponentInspector: Constructor called');
    }

    connectedCallback() {
        console.log('ComponentInspector: Connected to DOM');
        this.render();
    }

    render() {
        console.log('ComponentInspector: Rendering');
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #f0f0f0;
                    padding: 10px;
                    border-radius: 5px;
                }
                h2 {
                    margin-top: 0;
                    color: #333;
                }
                #inspector-content {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .field {
                    display: flex;
                    justify-content: space-between;
                }
                button {
                    margin-top: 10px;
                }
            </style>
            <h2>Inspector</h2>
            <div id="inspector-content">
                <p>No component selected</p>
            </div>
        `;
    }

    setComponent(component) {
        console.log('ComponentInspector: setComponent called with', component);
        const content = this.shadowRoot.getElementById('inspector-content');

        if (component) {
            content.innerHTML = `
                <div class="field">
                    <span>Type:</span>
                    <span>${component.type}</span>
                </div>
                <div class="field">
                    <span>Position X:</span>
                    <span>${component.x}</span>
                </div>
                <div class="field">
                    <span>Position Y:</span>
                    <span>${component.y}</span>
                </div>
                <button id="delete-btn">Delete Component</button>
            `;

            this.shadowRoot.getElementById('delete-btn').addEventListener('click', () => {
                console.log('ComponentInspector: Delete button clicked');
                this.dispatchEvent(new CustomEvent('component-delete', {
                    bubbles: true,
                    composed: true,
                    detail: { component }
                }));
                this.setComponent(null);
            });
        } else {
            content.innerHTML = '<p>No component selected</p>';
        }
        console.log('ComponentInspector: Content updated', content.innerHTML);
    }
}

customElements.define('component-inspector', ComponentInspector);
