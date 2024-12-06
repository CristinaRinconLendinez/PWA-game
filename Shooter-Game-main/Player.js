/**
 * Main character of the game. Inherits from the Character class
 * @extends Character
 */
class Player extends Character {
    /**
    * Initializes a player
    * @param game {Game} The instance of the game to which the player belongs
    */

    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.lives = PLAYER_LIVES; //TASK2
    }

    /**
     * Update the position attributes of the player and the shots based on the keys pressed
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Kill the player
     */
    collide() {  //TASK2 AÑADIR PRACT TODO
        if (!this.dead) {
            this.lives--; // Reduce lives by 1 when hit  
            document.getElementById("livesli").innerHTML = `Lives: ${this.lives}`; // Update the lives display in UI  
            if (this.lives > 0) {
                // Temporarily "kill" the player but revive after 2 seconds
                super.collide();
                setTimeout(() => {
                    this.dead = false; // Revive the player
                    this.image.src = PLAYER_PICTURE; // Restore original image
                }, 2000); // 2-second delay before reviving
            } else {
                // If no lives left, end the game
                this.game.endGame();
            }
        }
    }
}
