import { people, companies, Person, Company } from './data'
import * as filterBy from './filter_by'

/*
 * Invocation with implicit `any`
 */
const person = filterBy.withoutGeneric(people, 'firstName', people[0].firstName)

console.info('🛑 Person (any array) Breakpoint')
debugger

/*
 * Invocation with implicit `any`
 */
const company = filterBy.withoutGeneric(
  companies,
  'website', // `any`
  companies[1].website
)

console.info('🛑 Company (any array) Breakpoint')
debugger

/*
 * Invocation utilising `Person` type passed as generic
 */
const personTyped = filterBy.withGeneric<Person>(
  people,
  'firstName', // => `keyof Person`
  people[0].firstName
)

console.info('🛑 Person (typed array) Breakpoint')
debugger

/*
 * Invocation utilising `Company` type passed as generic
 */
const companyTyped = filterBy.withGeneric<Company>(
  companies,
  'website', // => `keyof Company`
  companies[1].website
)

console.info('🛑 Company (typed array) Breakpoint')
debugger

/*
 * Promise call, providing `Person` type for the
 * resolve value generic
 */
const promise = new Promise<Person[]>(resolve => {
  setTimeout(() => resolve(people), 1000)
})

const getFirstNames = (people: Person[]): string[] => people.map(p => p.firstName)
promise.then(getFirstNames)

console.info('🛑 Promise Breakpoint')
debugger
