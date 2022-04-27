class UKPlug {
    sendPower() {
        console.log("Giving 220V");
        return 220;
    }
}
class USPlug {
    sendPower() {
        console.log("Giving 100V");
        return 100;
    }
}
class USPlugToUKPlugAdapter {
    constructor(USPlug) {
        this.USPlug = USPlug;
    }
    sendPower() {
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
