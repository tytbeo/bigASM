import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  transform(value: any, prefix : string="+84"): any {
    value = `(${prefix})${value.split("-").join("")}` 
    return value;
  }
}
