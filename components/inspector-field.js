class InspectorField extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute('name');
        const value = this.getAttribute('value');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                input {
                    width: 50%;
                }
            </style>
            <label>${name}</label>
            <input type="number" value="${value}">
        `;
    }
}

customElements.define('inspector-field', InspectorField);
