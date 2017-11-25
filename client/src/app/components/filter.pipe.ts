import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {return []; }
    if (!searchText) {return items; }
    searchText = searchText.toLowerCase();
    let result=
    items.filter( it => {
      return it.caption.toLowerCase().includes(searchText);
    });
   
    if(result.length === 0) {
      return [-1];
    }
    return result;
  }
}
