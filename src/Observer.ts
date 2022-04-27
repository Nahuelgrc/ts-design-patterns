interface ISubject {
  registerObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(): void;
}

interface IObserver {
  update(temperature: number): void;
}

class WeatherStation implements ISubject {
  private temperature: number;
  private observers: IObserver[] = [];

  setTemperature(temp: number) {
    this.temperature = temp;
    this.notifyObservers();
  }

  registerObserver(o: IObserver): void {
    this.observers.push(o);
  }

  removeObserver(o: IObserver): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements IObserver {
  private subject: ISubject;

  constructor(weatherStation: ISubject) {
    this.subject = weatherStation;
    this.subject.registerObserver(this);
  }

  update(temperature: number): void {
    console.log(`Current temperature: ${temperature}`);
  }
}

class Fan implements IObserver {
  private subject: ISubject;

  constructor(weatherStation: ISubject) {
    this.subject = weatherStation;
    this.subject.registerObserver(this);
  }

  update(temperature: number): void {
    if (temperature > 25) {
      console.log("Turning myself on");
    } else {
      console.log("Turning myself off");
    }
  }
}

const weatherStation = new WeatherStation();

const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
