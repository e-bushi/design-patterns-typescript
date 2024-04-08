//This is the singleton design pattern. 
//It is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance.

class Life {
    private static instance: Life;

    private constructor() {}

    static getInstance() {
        if (!Life.instance) {
            Life.instance = new Life();
        }
        return Life.instance;
    }
}

class Human {
    public static shared: Human = new Human();

    private constructor() {}
}