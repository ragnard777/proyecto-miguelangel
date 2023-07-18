import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(alumno: any, ...args: unknown[]): unknown {
    const isUppercase = args[0] === 'uppercase';
    const fullName = `${alumno.nombre} ${alumno.alias}`;
    return isUppercase ? fullName.toUpperCase() : fullName;
  }
}
