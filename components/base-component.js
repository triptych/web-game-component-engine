export class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        // To be implemented by child classes
    }

    addEventListeners() {
        // To be implemented by child classes if needed
    }

    // Utility method to create and append an element
    createElement(tag, className, textContent) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (textContent) element.textContent = textContent;
        return element;
    }
}
