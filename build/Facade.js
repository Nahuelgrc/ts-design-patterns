var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class TV {
    turnOn() {
        console.log("TV is turning on...");
    }
    turnOff() {
        console.log("TV is turning off...");
    }
}
class Lights {
    constructor() {
        this.dim = 0;
    }
    setDim(value) {
        console.log(`Setting dim to ${value}`);
        this.dim = value;
    }
    getDim() {
        return this.dim;
    }
}
class BluRay {
    turnOn() {
        console.log("BluRay is turning on...");
    }
    turnOff() {
        console.log("BluRay is turning off...");
    }
}
class Movie {
    constructor(tv, lights, bluray) {
        this.tv = tv;
        this.lights = lights;
        this.bluray = bluray;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Welcome. The TV is starting...");
            this.lights.setDim(0);
            this.bluray.turnOn();
            this.tv.turnOn();
            console.log("TV finished starting. Enjoy your movie.");
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Hope you enjoyed your movie. TV is turning off...");
            this.lights.setDim(100);
            this.bluray.turnOff();
            this.tv.turnOff();
            console.log("Good bye");
        });
    }
}
const bluray = new BluRay();
const lights = new Lights();
const tv = new TV();
const movie = new Movie(tv, lights, bluray);
movie.start();
movie.stop();
