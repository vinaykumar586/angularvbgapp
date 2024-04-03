export class UpperCasePipe {
    constructor(){

    }
    transform(value: string):string {
    return value.toLocaleUpperCase()
    }
  
  }