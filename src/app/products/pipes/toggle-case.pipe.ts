import { Pipe, PipeTransform } from '@angular/core';

// fer | toggleCase = 'FER'
// FER | toggleCase = 'fer'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper:boolean): string {
    return toUpper
      ? value.toLocaleLowerCase()
      : value.toLocaleUpperCase();
  }
}
