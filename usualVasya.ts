interface IUser {
    id: number;
    name: string;
}
function buildUser(userId: number, userName: string): IUser {
 
    return { id: userId, name: userName };
}
 
let newUser = buildUser(1, "Vasya");
let newUser = buildUser(2, "Grisha")

console.log("id: " + newUser.id);
console.log("name: " + newUser.name)