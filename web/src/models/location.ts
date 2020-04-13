export class Location {
  public id: string;
  public name: string;
  public entry: string;
  public requirements?: Requirement[];

  constructor(id: string, name: string, entry: string, status: string) {
    this.id = id;
    this.name = name;
    this.entry = entry;
  }
}


export class Requirement {
  public id: string;
  public name: string;

  constructor(id: string, name: string, icon?: string) {
    this.id = id;
    this.name = name;
  }
}
