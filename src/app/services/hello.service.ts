import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class HelloService {
  constructor(private loggerService: LoggerService) {}
  sayHello() {
    this.loggerService.log('Hello tout le monde');
  }
}
