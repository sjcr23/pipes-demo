import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(flying:boolean): "✅" | "⛔" {
    return flying
      ? "✅"
      : "⛔";
  }
}
