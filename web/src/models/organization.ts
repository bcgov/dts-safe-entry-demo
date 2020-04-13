export class Organization {
  public id: string;
  public name: string;
  public sourceId: string;
  public status: string;
  public employees?: Employee[];
  public employeeCount?: number;
  public services?: Service[];
  public updated?: string;

  constructor(id: string, name: string, sourceId: string, status: string) {
    this.id = id;
    this.name = name;
    this.sourceId = sourceId;
    this.status = status;
  }
}

export class Employee {
  public id: string;
  public orgId: string;
  public name: string;
  public familyName?: string;
  public givenNames?: string;
  public email: string;
  public services: Service[];

  constructor(
    id: string,
    orgId: string,
    name: string,
    email: string,
    familyName?: string,
    givenNames?: string,
    services?: Service[]
  ) {
    this.id = id;
    this.orgId = orgId;
    this.name = name;
    this.familyName = familyName;
    this.givenNames = givenNames;
    this.email = email;
    this.services = services || [];
  }
}

export class Service {
  public id: string;
  public name: string;
  public icon?: string;

  constructor(id: string, name: string, icon?: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}
