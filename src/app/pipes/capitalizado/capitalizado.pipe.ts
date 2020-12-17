import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: true): string {
    console.log(value.toLocaleLowerCase());
    value = value.toLocaleLowerCase();

    // console.log({edad, activo, mensaje});
    let palabras = value.split(' ');
    console.log(palabras);

    if (todas){
      palabras = palabras.map( palabra => {
        return palabra[0].toUpperCase() + palabra.substr(1);
      });
    }else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }

    return palabras.join(' ');
   }

}
