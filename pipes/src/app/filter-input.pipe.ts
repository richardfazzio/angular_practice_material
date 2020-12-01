import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInput',
  // pure: false // Setting to false => will update / rerun whenever data changes
})
export class FilterInputPipe implements PipeTransform {

  transform(value: any, status: string): any {
    if (!value || !status || status === 'all') {
      return value;
    }
    return value.filter(item => item.status === status);
  }
}
