//This is the Model-View-Controller (MVC) pattern. 
//It is similar to the Model-View-ViewModel (MVVM) pattern, but with a few key differences. 
//In MVC, the controller is responsible for handling user input and updating the model and view accordingly. 
//The view is responsible for displaying the model data, and the model is responsible for storing the data.

// Model
class User {
    private _id: number;
    private _name: string;
    private _email: string;
  
    constructor(id: number, name: string, email: string) {
      this._id = id;
      this._name = name;
      this._email = email;
    }
  
    get id(): number {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get email(): string {
      return this._email;
    }

    updateName(name: string) {
        this._name = name
    }

    updateEmail(email: string) {
        this._email = email
    }
  }
  
  // View
  class UserView {
    private user: User;
  
    constructor(user: User) {
      this.user = user;
    }
  
    displayUser(): void {
      console.log(`ID: ${this.user.id}`);
      console.log(`Name: ${this.user.name}`);
      console.log(`Email: ${this.user.email}`);
    }
  }
  
  // Controller
  class UserController {
    private user: User;
    private view: UserView;
  
    constructor(id: number, name: string, email: string) {
      this.user = new User(id, name, email);
      this.view = new UserView(this.user);
    }
  
    displayUser(): void {
      this.view.displayUser();
    }
  
    updateUser(name: string, email: string): void {
      this.user.updateName(name);
      this.user.updateEmail(email)
      this.view.displayUser();
    }
  }
  
  // Example usage
  const userController = new UserController(1, 'John Doe', 'john.doe@example.com');
  userController.displayUser(); // Output: ID: 1, Name: John Doe, Email: john.doe@example.com
  
  userController.updateUser('Jane Doe', 'jane.doe@example.com');
  // Output: ID: 1, Name: Jane Doe, Email: jane.doe@example.com