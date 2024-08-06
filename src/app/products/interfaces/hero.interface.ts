export enum Publisher {
  dc, marvel, shonenJump
}


export interface Hero {
  name:string,
  flying:boolean,
  owner:Publisher
}
