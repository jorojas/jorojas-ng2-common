import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PoweredByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'poweredByPipe',
})
export class PoweredByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    //return value.toLowerCase();
    return 'Powered by NovoPayment Inc.'
  }
}
