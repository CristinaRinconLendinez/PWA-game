// Boss.js
class Boss extends Opponent { //TASK3 punto 1
    constructor(game) {
        super(game);
        this.image.src = 'assets/boss.png';
        this.myImageDead = 'assets/boss_dead.png';
        this.speed *= 2;  
    }
}
