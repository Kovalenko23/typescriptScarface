interface IUser {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
 
class User implements IUser{
 
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}
 
let Kolya = new User(1, "Kolya", 18);
console.log(Kolya.getFullName("Omega babuin"));

let Vlad = new User(2, "Vlad", 19);
console.log(Vlad.getFullName("Alfa babuin"));

