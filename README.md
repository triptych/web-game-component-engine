# Web Game Component Engine

A web-based 2D game component editor that allows users to create, edit, and manage game components in a grid-based layout. This project uses custom web components to create a modular and extensible game editor.

## Features

- Drag and drop game components onto a grid
- Edit component properties using the inspector
- Save and load game layouts
- Rerender grid functionality for debugging
- Tabbed interface for component list and inspector
- Zoom and pan controls for the game grid
- Toolbar with save, load, reset, and rerender options

## Project Structure

The project is organized into the following main parts:

- `main.js`: Entry point of the application, imports all components and sets up event listeners
- `components/`: Contains all custom web components used in the editor
  - `game-editor.js`: Main component that orchestrates the entire editor
  - `game-grid.js`: Represents the game grid where components are placed
  - `component-list.js`: Displays available game components
  - `component-inspector.js`: Allows editing of component properties
  - `tool-bar.js`: Contains buttons for various editor actions
  - `tabbed-panel.js`: Manages the tabbed interface for component list and inspector
  - Other utility components (e.g., zoom-control.js, pan-control.js, delete-button.js)
- `game-components/`: Contains definitions for game-specific components
  - player.js
  - enemy.js
  - platform.js
  - coin.js
  - button.js

## Components

### Game Components

- Player
- Enemy
- Platform
- Coin
- Button

### Editor Components

- GameEditor: Main component that manages the entire editor interface
- GameGrid: Handles the placement and rendering of game components
- ComponentList: Displays available game components for dragging onto the grid
- ComponentInspector: Allows editing of selected component properties
- ToolBar: Provides buttons for save, load, reset, and rerender actions
- TabbedPanel: Manages the tabbed interface for component list and inspector
- ZoomControl: Handles zooming functionality for the game grid
- PanControl: Handles panning functionality for the game grid
- DeleteButton: Allows deletion of selected components

## Recent Updates

- Improved layout with toolbar at the top
- Added tabbed panel for component list and inspector
- Fixed issues with component rendering
- Added "Rerender Grid" functionality for debugging
- Implemented zoom and pan controls

## How to Use

1. Open the editor in a web browser
2. Drag components from the component list onto the grid
3. Click on placed components to edit their properties in the inspector
4. Use the toolbar buttons to save, load, or reset the game state
5. Use the "Rerender Grid" button if you encounter any rendering issues
6. Use zoom and pan controls to navigate the game grid

## Development

To set up the project for development:

1. Clone the repository
2. Open the project folder in your preferred code editor
3. Use a local server to run the project (e.g., Live Server extension in VS Code)

### Adding New Components

To add a new game component:

1. Create a new file in the `game-components/` directory
2. Define the component's properties and behavior
3. Import the new component in `main.js`
4. Add the component to the ComponentList in `component-list.js`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
