import IUSPlug from "../interfaces/IUSPlug";
import IUKPlug from "../interfaces/IUKPlug";

export class UKPlug implements IUKPlug {
  sendPower(): number {
    console.log("Giving 220V");
    return 220;
  }
}

export class USPlug implements IUSPlug {
  sendPower(): number {
    console.log("Giving 100V");
    return 100;
  }
}

export class USPlugToUKPlugAdapter implements USPlug {
  private USPlug: USPlug;

  constructor(USPlug: USPlug) {
    this.USPlug = USPlug;
  }

  sendPower(): number {
    console.log("Converter called");
    console.log("Let's convert the US Voltage to UK");
    const USV = this.USPlug.sendPower();
    const UKV = USV + 120;

    console.log(`Voltage converted to ${UKV}V`);

    return UKV;
  }
}
