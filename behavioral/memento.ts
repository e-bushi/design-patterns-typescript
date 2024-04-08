//This is the memento design pattern. It is a behavioral design pattern that allows an object to capture its internal state 
//and save it to be restored later. This is how they implement undo functionality in applications or save games.

// Originator class
class Game {
    private level: number;
    private points: number;

    public setLevel(level: number): void {
        this.level = level;
    }

    public setPoints(points: number): void {
        this.points = points;
    }

    public save(): Memento {
        return new Memento(this.level, this.points);
    }

    public restore(memento: Memento): void {
        this.level = memento.getLevel();
        this.points = memento.getPoints();
    }

    public print(): void {
        console.log(`Content: ${this.level}`);
        console.log(`Font Style: ${this.points}`);
    }
}
  
// Memento class
class Memento {
    private level: number;
    private points: number;

    constructor(level: number, points: number) {
        this.level = level;
        this.points = points;
    }

    public getLevel(): number {
        return this.level;
    }

    public getPoints(): number {
        return this.points;
    }
}
  
  // Caretaker class
  class GameManager {
    private mementos: Memento[] = [];
  
    public saveGame(game: Game): void {
      this.mementos.push(game.save());
    }
  
    public restoreGame(game: Game, index: number): void {
      game.restore(this.mementos[index]);
    }
  }
  
  // Example usage
  const newGame = new Game();
  newGame.setLevel(5);
  newGame.setPoints(3000);
  newGame.print(); // Output: Content: Hello, World!, Font Style: Arial, 12pt
  
  const gameManager = new GameManager();
  gameManager.saveGame(newGame);
  
  newGame.setLevel(8);
  newGame.setLevel(9000);
  newGame.print(); // Output: Content: This is an updated document., Font Style: Times New Roman, 14pt
  
  gameManager.restoreGame(newGame, 0);
  newGame.print(); // Output: Content: Hello, World!, Font Style: Arial, 12pt