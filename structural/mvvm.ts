//This is called the Model-View-ViewModel design pattern. It's considered an architectual and structural design pattern.
//The main difference between MVC and MVVM is that MVVM has a ViewModel that acts as a mediator between the Model and the View.
//The ViewModel is responsible for handling the data and logic of the application. It updates the Model and the View based on the user's input.
//The Controller is responsible for managing the higher-level application flow and coordinating the interactions between the View and the ViewModel.


// Model
class Person {
    private _name: string;
    private _age: number;
  
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  
    get name(): string {
      return this._name;
    }
  
    get age(): number {
      return this._age;
    }

    updateName(name:string) {
        this._name = name
    }

    updateAge(age: number) {
        this._age = age
    }
  }
  
  // ViewModel
  class PersonViewModel {
    private _person: Person;
  
    constructor(person: Person) {
      this._person = person;
    }
  
    get name(): string {
      return this._person.name;
    }
  
    get age(): number {
      return this._person.age;
    }
  
    updateName(newName: string): void {
      this._person.updateName(newName);
    }
  
    updateAge(newAge: number): void {
      this._person.updateAge(newAge);
    }
  }
  
  // View
  class PersonView {
    private _viewModel: PersonViewModel;
  
    constructor(viewModel: PersonViewModel) {
      this._viewModel = viewModel;
    }
  
    displayPersonInfo(): void {
      console.log(`Name: ${this._viewModel.name}, Age: ${this._viewModel.age}`);
    }
  
    updatePersonName(newName: string): void {
      this._viewModel.updateName(newName);
      this.displayPersonInfo();
    }
  
    updatePersonAge(newAge: number): void {
      this._viewModel.updateAge(newAge);
      this.displayPersonInfo();
    }
  }
  
  // Controller
  class PersonController {
    private _view: PersonView;
    private _viewModel: PersonViewModel;
  
    constructor() {
      const person = new Person('John Doe', 30);
      this._viewModel = new PersonViewModel(person);
      this._view = new PersonView(this._viewModel);
    }
  
    updatePersonName(newName: string): void {
      this._view.updatePersonName(newName);
    }
  
    updatePersonAge(newAge: number): void {
      this._view.updatePersonAge(newAge);
    }
  
    displayPersonInfo(): void {
      this._view.displayPersonInfo();
    }
  }
  
  // Usage
  const personController = new PersonController();
  personController.displayPersonInfo(); // Output: Name: John Doe, Age: 30
  personController.updatePersonName('Jane Doe');
  personController.displayPersonInfo(); // Output: Name: Jane Doe, Age: 30
  personController.updatePersonAge(35);
  personController.displayPersonInfo(); // Output: Name: Jane Doe, Age: 35