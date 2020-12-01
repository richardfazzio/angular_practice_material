import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(value: any[],): any {
    return value.sort((a: any, b: any) => a.name < b.name ? -1 : 1);
  }

}
