class InspectorField extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addInputListener();
    }

    render() {
        const name = this.getAttribute('name');
        const value = this.getAttribute('value');
        const type = this.getInputType(name, value);

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
            <input type="${type}" value="${value}">
        `;
    }

    getInputType(name, value) {
        if (name === 'Type' || name === 'Action') {
            return 'text';
        }
        return isNaN(value) ? 'text' : 'number';
    }

    addInputListener() {
        const input = this.shadowRoot.querySelector('input');
        input.addEventListener('change', (e) => {
            const name = this.getAttribute('name');
            const value = e.target.value;
            this.dispatchEvent(new CustomEvent('field-change', {
                bubbles: true,
                composed: true,
                detail: { name, value }
            }));
        });
    }
}

customElements.define('inspector-field', InspectorField);
