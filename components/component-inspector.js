class ComponentInspector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                }
                h2 {
                    margin-top: 0;
                }
            </style>
            <h2>Inspector</h2>
            <div id="inspector-content">
                No component selected
            </div>
        `;
    }

    updateInspector(component) {
        const content = this.shadowRoot.getElementById('inspector-content');
        if (component) {
            content.innerHTML = `
                <inspector-field name="Position X" value="0"></inspector-field>
                <inspector-field name="Position Y" value="0"></inspector-field>
                <inspector-field name="Width" value="1"></inspector-field>
                <inspector-field name="Height" value="1"></inspector-field>
                <delete-button></delete-button>
            `;
        } else {
            content.textContent = 'No component selected';
        }
    }
}

customElements.define('component-inspector', ComponentInspector);
