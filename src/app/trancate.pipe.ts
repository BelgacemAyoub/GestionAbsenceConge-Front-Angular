import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trancate'
})
export class TrancatePipe implements PipeTransform {

  transform(str: string): string {
    let sousChaine = str.slice(0,10); 
    return sousChaine+' ...';
  }

}
