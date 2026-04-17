import { Injectable, inject } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class HelloService {
  private loggerService = inject(LoggerService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
  sayHello() {
    this.loggerService.log('Hello tout le monde');
  }
}
