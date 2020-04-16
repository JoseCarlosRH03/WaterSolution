import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cedula'
})
export class CedulaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if (value.length != 11) {
      return value.slice(0,11) ;
    } else if(value.length === 11){
      return `${value.slice(0,3)}-${value.slice(3,10)}-${value.slice(10,11)}`;
    }
  }

}
