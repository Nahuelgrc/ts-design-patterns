import { Movie, TV, Lights, BluRay } from "../models/classes/Movie";
import { USPlug, USPlugToUKPlugAdapter } from "../models/classes/Plug";

export default class PatternService {
  async facade(): Promise<void> {
    const bluray = new BluRay();
    const lights = new Lights();
    const tv = new TV();

    const movie = new Movie(tv, lights, bluray);

    await movie.start();
    await movie.stop();
  }

  async adapter(): Promise<void> {
    const usPlug = new USPlug();
    const adapter = new USPlugToUKPlugAdapter(usPlug);
    await adapter.sendPower();
  }
}
