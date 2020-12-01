import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pop'
})
export class PopPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
