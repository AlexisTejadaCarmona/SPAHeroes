import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, visible: boolean = false): string {
    return (visible) ? '*' .repeat(value.length) : value;
    // value = value;

    // if (visible){
    //   return value;
    // }else{
    //   return '*' .repeat(value.length);
    // }
  }

}
