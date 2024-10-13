# 2D Web Game Component Editor

## Project Overview

The 2D Web Game Component Editor is a web application that allows users to build 2D web games using web components. It provides an intuitive interface for selecting, placing, and configuring game components on a grid, all implemented using vanilla HTML, CSS, and JavaScript.

## Features

1. Component List: A scrollable list of available game components.
2. Game Grid: A central area where users can place and manipulate game components.
3. Component Inspector: A panel for viewing and editing properties of selected components.
4. Drag-and-Drop Functionality: Users can drag components from the list to the grid.
5. Zoom and Pan Controls: For navigating larger game layouts, including smooth panning functionality.
6. Component Selection and Deletion: Users can select components on the grid and delete them.
7. Responsive Design: The application is designed to work on different screen sizes.
8. Toolbar: Provides options to save, load, and reset the game state.
9. Game Components: A set of pre-built game components (Player, Enemy, Platform, Coin, Button) that can be used to create games.
10. Save and Load Functionality: Users can save their current game state to a JSON file and load it later, allowing for easy project management and sharing.

## Project Structure

The project is organized as follows:

- `index.html`: The main HTML file that structures the application.
- `main.js`: The entry point of the JavaScript application, handling component imports and main event listeners.
- `styles.css`: Contains the global styles for the application.
- `components/`: A directory containing all the web components used in the application.
  - `game-editor.js`: The main container component for the entire application, managing the overall state and interactions between other components.
  - `component-list.js`: Manages the left column display of available game components.
  - `component-item.js`: Represents individual draggable components in the list.
  - `game-grid.js`: Handles the central grid area where components are placed.
  - `grid-cell.js`: Represents individual cells within the game grid.
  - `component-inspector.js`: Manages the right column for inspecting and editing selected components.
  - `inspector-field.js`: Reusable component for editable fields in the inspector.
  - `zoom-control.js`: Provides zoom functionality for the game grid.
  - `pan-control.js`: Enables smooth panning of the game grid.
  - `delete-button.js`: A reusable delete button component.
  - `tool-bar.js`: Manages the toolbar with save, load, and reset functionality.
- `game-components/`: A directory containing the implemented game components.
  - `player.js`: Implements the Player game component.
  - `enemy.js`: Implements the Enemy game component.
  - `platform.js`: Implements the Platform game component.
  - `coin.js`: Implements the Coin game component.
  - `button.js`: Implements the Button game component.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Custom Elements API
- HTML5 Drag and Drop API

## Getting Started

To run the project locally:

1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Launch a local server (e.g., using Live Server in VS Code or Python's `http.server`).
4. Open the application in your web browser.

## Usage

1. Use the toolbar at the top to save, load, or reset your game state.
2. Browse the component list on the left side of the screen.
3. Drag components from the list onto the game grid in the center.
4. Click on placed components to select them and view their properties in the inspector on the right.
5. Use the inspector to modify component properties.
6. Use the zoom and pan controls to navigate the game grid, including smooth panning for precise navigation.
7. Delete components using the delete button in the inspector.
8. Save your current game state using the save button in the toolbar. This will download a JSON file containing your game state.
9. Load a previously saved game state using the load button in the toolbar. This will allow you to upload a JSON file and restore your game layout.

## Game Components

The editor includes the following pre-built game components:

1. Player: A blue circular component representing the player character.
2. Enemy: A red triangular component representing enemy characters.
3. Platform: A green rectangular component representing platforms or terrain.
4. Coin: A gold circular component representing collectible items.
5. Button: A customizable button component for UI elements or interactive game objects.

These components can be easily added to the game grid and customized using the component inspector.

## Customization

The application uses CSS Custom Properties (variables) for theming. You can easily customize the look by modifying the variables in the `:root` selector in `styles.css`.

## Performance Considerations

- The application implements efficient DOM manipulation techniques.
- Event delegation is used for better performance, especially in the game grid.
- The project structure allows for easy implementation of virtual scrolling and lazy loading if needed for larger game projects.

## Accessibility

- The application is designed with accessibility in mind, ensuring keyboard navigation and proper use of ARIA attributes.
- All interactive elements are keyboard accessible.
- Text alternatives are provided for icons and visual information.

## Future Enhancements

- Implement undo/redo functionality.
- Add more game components and expand the component library.
- Implement a preview mode for testing game functionality.
- Add the ability to create custom game components within the editor.

## Contributing

Contributions to improve the 2D Web Game Component Editor are welcome. Please feel free to submit issues and pull requests.

## License

MIT License

Copyright (c) 2023 [Your Name or Organization]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
