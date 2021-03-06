import {Injectable} from "@angular/core";
import {Hero} from "./Hero";
import {HEROES} from "./mock-hero";

@Injectable()
export class HeroService{
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
