import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PoweredByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'copyrightPipe',
})
export class CopyrightPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    //return value.toLowerCase();
    return 'Copyright NovoPayment Inc., 2017'
  }
}