# 2D Web Game Component Editor

## Overview

Create a web application that allows users to build 2D web games using web components. The application should provide an intuitive interface for users to select, place, and configure game components on a grid, all implemented using vanilla HTML, CSS, and JavaScript.

## Interface Layout

The interface should consist of three main sections:

1. Left Column: Component List
2. Center: Game Grid
3. Right Column: Component Inspector

## Detailed Component Descriptions

### 1. Left Column: Component List

- Display a scrollable list of available game components
- Each component should be represented by an icon and name
- Implement drag-and-drop functionality for adding components to the game grid
- Group components by categories (e.g., UI, Characters, Environment)

### 2. Center: Game Grid

- Present a grid representing the game canvas
- Allow users to place components by dragging from the left column or clicking on an empty grid cell
- Implement a snapping mechanism to align components to the grid
- Enable component selection, movement, and deletion within the grid
- Provide zoom and pan controls for navigating larger game layouts

### 3. Right Column: Component Inspector

- Show detailed properties and settings for the currently selected component
- Display editable fields for modifying component attributes (e.g., position, size, color)
- Include a delete button to remove the selected component from the grid
- Provide component-specific controls and options based on the type of component selected

## Web Components for Editor UI

1. `<game-editor>`: The main container component for the entire application
2. `<component-list>`: Manages the left column display of available game components
3. `<component-item>`: Represents individual draggable components in the list
4. `<game-grid>`: Handles the central grid area where components are placed
5. `<grid-cell>`: Represents individual cells within the game grid
6. `<component-inspector>`: Manages the right column for inspecting and editing selected components
7. `<inspector-field>`: Reusable component for editable fields in the inspector
8. `<zoom-control>`: Provides zoom functionality for the game grid
9. `<pan-control>`: Enables panning of the game grid
10. `<delete-button>`: A reusable delete button component
11. `<tool-bar>` : A toolbar for the editor with options like save, load, etc.
12. `<save-button>`: A button to save the current game state
13. `<load-button>`: A button to load a previously saved game state
14. `<reset-button>`: A button to reset the game grid to its initial state

## Implementation Guidelines

### HTML

- Use semantic HTML5 elements for the overall structure
- Implement custom elements for each web component using the Custom Elements API

### CSS

- Utilize CSS Grid for the main layout of the three columns
- Use Flexbox for component arrangements within each column
- Implement responsive design to ensure usability on different screen sizes
- Use CSS Custom Properties (variables) for consistent theming and easy customization

### JavaScript

- Leverage the Custom Elements API to define and register all web components
- Implement drag-and-drop functionality using the HTML5 Drag and Drop API
- Use event delegation for efficient event handling, especially in the game grid
- Implement a pub/sub pattern or custom event system for communication between components
- Utilize ES6+ features like classes, modules, and arrow functions for clean and maintainable code
- Store game state in a central store or using the Observer pattern to keep UI in sync with data

### Performance Considerations

- Implement virtual scrolling for the component list if it becomes very long
- Use efficient DOM manipulation techniques, such as DocumentFragment for batch updates
- Optimize rendering of the game grid, especially for larger game layouts
- Implement lazy loading for component icons and other assets

### Accessibility

- Ensure all interactive elements are keyboard accessible
- Use ARIA attributes to enhance the accessibility of custom components
- Provide text alternatives for icons and visual information
- Implement proper focus management, especially when opening/closing inspectors or modals

By following these guidelines and implementing the described components, you will create a powerful and intuitive 2D web game editor using web components and vanilla web technologies.
