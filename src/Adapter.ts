interface IUKPlug {
  sendPower: () => number;
}

interface IUSPlug {
  sendPower: () => number;
}

class UKPlug implements IUKPlug {
  sendPower(): number {
    console.log("Giving 220V");
    return 220;
  }
}

class USPlug implements IUSPlug {
  sendPower(): number {
    console.log("Giving 100V");
    return 100;
  }
}

class USPlugToUKPlugAdapter implements USPlug {
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

const usPlug = new USPlug();
const adapter = new USPlugToUKPlugAdapter(usPlug);
adapter.sendPower();
