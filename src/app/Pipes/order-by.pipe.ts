import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: Array<any>, colName : any, order : string = "ascending"): any {
    let isNum = typeof arr[0][colName] == "number" ;
    if( order == "ascending"){
      if(isNum){
        return arr.sort((a,b)=> a[colName] -  b[colName] );
      }
      return arr.sort((a,b)=> a[colName].localeCompare( b[colName]) );
    }
    if(isNum){
      return arr.sort((a,b)=> b[colName] - a[colName] );
    }
    return arr.sort((a,b)=>b[colName].localeCompare( a[colName]) );
  }

}
