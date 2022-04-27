class WeatherStation {
    constructor() {
        this.observers = [];
    }
    setTemperature(temp) {
        this.temperature = temp;
        this.notifyObservers();
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        const index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}
class TemperatureDisplay {
    constructor(weatherStation) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }
    update(temperature) {
        console.log(`Current temperature: ${temperature}`);
    }
}
class Fan {
    constructor(weatherStation) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }
    update(temperature) {
        if (temperature > 25) {
            console.log("Turning myself on");
        }
        else {
            console.log("Turning myself off");
        }
    }
}
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
