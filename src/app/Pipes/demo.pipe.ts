import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class Demo implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
