# Rock Paper Scissors Game

This is a simple web-based Rock Paper Scissors game. Players can choose between rock, paper, or scissors, and play against the computer. The game keeps track of the player's wins, losses, and ties.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click on one of the buttons (rock, paper, or scissors) to make your choice.
3. The computer will randomly choose its move.
4. The game will display the result of the round and update the score accordingly.
5. You can continue playing multiple rounds, and the scores will be updated.

## Technologies Used

- HTML
- CSS
- JavaScript

## Files

### `index.html`

This is the main HTML file that contains the game interface. It has buttons for rock, paper, and scissors moves, as well as elements to display the score, game result, and the player's and computer's moves.

### `rock-paper-scissors.css`

This CSS file contains the styling for the game interface. It sets the background color, font, and styles the buttons, icons, and other elements of the game.

### `rock-paper-scissors.js`

This JavaScript file contains the logic for the Rock Paper Scissors game. It handles player moves, computer moves, determines the result of each round, updates the score, and allows the player to reset or save the game scores.

## How the Game Works

1. When a player clicks on one of the buttons (rock, paper, or scissors), the corresponding move is stored as the player's choice.
2. The computer makes a random move using the `computerPlay()` function.
3. The `winLoseTie(playerChoice, computerChoice)` function determines the result of the round (win, lose, or tie) based on the player's and computer's choices.
4. The game updates the score, game result, and the player's and computer's move icons using various functions (`scoreTableChange()`, `gameResultChange(result)`, and `gameSituationChange(playerChoice, computerChoice)`).
5. The player can reset the scores using the "Reset Scores" button, save the current scores using the "Save Scores" button, or continue a previous game with the saved scores using the "Continue Previous Game" button.

Feel free to enhance this project further, add more features, or improve the user interface. Have fun playing and coding!
