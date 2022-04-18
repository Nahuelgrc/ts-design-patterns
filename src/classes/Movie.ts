import IPower from "./interfaces/IPower";
import IDimmer from "./interfaces/IDimmer";
import IMovie from "./interfaces/IMovie";

export class TV implements IPower {
  turnOn(): void {
    console.log("TV is turning on...");
  }

  turnOff(): void {
    console.log("TV is turning off...");
  }
}

export class Lights implements IDimmer {
  private dim: number;

  constructor() {
    this.dim = 0;
  }

  setDim(value: number): void {
    console.log(`Setting dim to ${value}`);
    this.dim = value;
  }

  getDim(): number {
    return this.dim;
  }
}

export class BluRay implements IPower {
  turnOn(): void {
    console.log("BluRay is turning on...");
  }

  turnOff(): void {
    console.log("BluRay is turning off...");
  }
}

export class Movie implements IMovie {
  private tv: TV;
  private lights: Lights;
  private bluray: BluRay;

  constructor(tv: TV, lights: Lights, bluray: BluRay) {
    this.tv = tv;
    this.lights = lights;
    this.bluray = bluray;
  }

  start(): void {
    console.log("Welcome. The TV is starting...");
    this.lights.setDim(0);
    this.bluray.turnOn();
    this.tv.turnOn();
    console.log("TV finished starting. Enjoy your movie.");
  }

  stop(): void {
    console.log("Hope you enjoyed your movie. TV is turning off...");
    this.lights.setDim(100);
    this.bluray.turnOff();
    this.tv.turnOff();
    console.log("Good bye");
  }
}