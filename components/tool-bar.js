class ToolBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #e9ecef;
                }
                .logo {
                    height: 30px;
                    margin-right: 20px;
                }
                .buttons {
                    display: flex;
                }
                button {
                    margin-left: 10px;
                    padding: 8px 16px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                button:hover {
                    background-color: #0056b3;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                button:active {
                    transform: translateY(0);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                button:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(0,123,255,0.5);
                }
            </style>
            <img src="../img/wgce.png" alt="WGCE Logo" class="logo">
            <div class="buttons">
                <button id="save">Save</button>
                <button id="load">Load</button>
                <button id="reset">Reset</button>
            </div>
        `;
    }

    addEventListeners() {
        const saveButton = this.shadowRoot.getElementById('save');
        const loadButton = this.shadowRoot.getElementById('load');
        const resetButton = this.shadowRoot.getElementById('reset');

        saveButton.addEventListener('click', () => this.dispatchEvent(new CustomEvent('save')));
        loadButton.addEventListener('click', () => this.dispatchEvent(new CustomEvent('load')));
        resetButton.addEventListener('click', () => this.dispatchEvent(new CustomEvent('reset')));
    }
}

customElements.define('tool-bar', ToolBar);
