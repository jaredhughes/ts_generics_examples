import { people, companies, Person, Company } from './data';
import * as filter from './filter';

console.log('ANY ======================\n');

const person = filter.withoutGeneric(people, 'firstName', people[0].firstName);

console.log(people[0].firstName, person);

const company = filter.withoutGeneric(
  companies,
  'website',
  companies[1].website
);
console.log(companies[1].website, company);

console.log('PERSON ======================\n');

const personTyped = filter.withGeneric<Person>(
  people,
  'firstName',
  people[0].firstName
);

console.log(people[0].firstName, personTyped);

console.log('COMPANY ======================\n');

personTyped.map(p => p.firstName);

const companyTyped = filter.withGeneric<Company>(
  companies,
  'website',
  companies[1].website
);

console.log(companies[1].website, companyTyped);

console.log('PROMISES ======================\n');

const promise = new Promise<Person[]>(resolve => {
  setTimeout(() => resolve(people), 1000);
});

promise.then(people => people.map(p => console.log(p.firstName)));
