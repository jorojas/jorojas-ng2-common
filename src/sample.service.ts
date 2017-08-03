import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() {

  }

  sayHi():string {
    return "Hello from NovoPayment";
  }
}
