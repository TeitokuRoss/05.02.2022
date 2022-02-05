//наследования
// базовый/родительский класс
class User {
	constructor(name, surname, age, isMale, email, isBanned = false) {
		this.firstName = name;
		this.lastName = surname;
		this.age = age;
		this.isMale = isMale;
		this.email = email;
		this.isBanned = isBanned;
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}
const user1 = new User("Test", "Testovich", 55, false, "test@test.com");

//дочерний класс
class Moderator extends User {
	constructor(name, surname, age, isMale, email, permission) {
		super(); //вызов конструктора базового класса
		this.permission = permission;
	}
    sendMessage(user, message){
        console.log(`${user.FullName} will receibe: "${message})`;
    }   
}

const moderator1 = new Moderator(
	"Mod",
	"Modovich",
	20,
	true,
	"mod@mod.com",
	{}
);
moderator1.sendMessage(user1, "Your message was banned");

class Admin extends Moderator{
    constructor(name, surname, age, isMale, email, permission){
        super(name, surname, isBanned, age, isMale, email, permission);
    }
    bann(user){
        user.isBanned = true;
    } 
    unbann(user){
        user.isBanned =  false;
    }
}


//класс Admin с методами bann(user) - забанить юзера, inbann(send) - разбанить


/*переопределение*/

//squriell (есть, что дадут), flyingSquirrel(есть только орехи)

class Squirrel{
    constructor (name){
        this.name = name;
    }
    run(){
        console.log(`squirrel ${this.name} is running`);
    }
    eat(food){
        console.log(`squirrel ${this.name} is eating ${food}`);
    }
}

class FlyingSquirrel extends Squirrel{
    constructor(name, maxDistance){
        super(name);
        this.maxDistance = maxDistance;
    }

    flying(){
        console.log(`squirrel ${this.name} is flying up to ${this.maxDistance}`);
    }
}

const squirrel = new Squirrel('Lilia');

const fSquirrel = new FlyingSquirrel('Boing 777', 30);

/********************************* */

class Figure{
    constructor(name){
        this.name = name;
    }
}

class Square extends Figure{
    constructor(a){
        super('Square');
        this.a = a;
    }
    getArea(){
        return this.a * this.a;
    }
}
 
class Rectangle extends Figure{
    constructor(a,b){
        super('Rectangle');
        this.a = a;
        this.b = b;
    }
}