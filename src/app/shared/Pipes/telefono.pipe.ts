import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonos'
})
export class TelefonoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {

    if (value.length != 10) {
      return value.slice(0,10) ;
    } else if(value.length === 10){
      return `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6,10)}`;
    }
  }

}
