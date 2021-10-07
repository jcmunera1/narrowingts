interface Person {
    // @ts-ignore
    id();
}
class Chef implements Person {
    id() {
        console.log("I am a chef")
    }
    cook(){
        console.log("I love to cook");
    }
}
class Driver implements Person {
    id() {
        console.log("I am a driver")
    }

    drive() {
        console.log("I love to drive");
    }
}
let person: Person;



