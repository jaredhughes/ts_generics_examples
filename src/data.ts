import * as faker from 'faker';

export type Person = {
  firstName: string;
  lastName: string;
  avatar: string;
};

export type Company = {
  companyName: string;
  phone: string;
  website: string;
};

export const people = Array.from({ length: 5 }, _ => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.internet.avatar(),
})) as Person[];

export const companies = Array.from({ length: 5 }, _ => ({
  companyName: faker.company.companyName(),
  phone: faker.phone.phoneNumber(),
  website: faker.internet.domainName(),
})) as Company[];
