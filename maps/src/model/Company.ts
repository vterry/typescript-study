import faker from 'faker';
import { Mappable } from './CustomMaps';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  markerContent(): string {
    return `
      <h1>Company Name: ${this.name}</h1>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
      `;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
