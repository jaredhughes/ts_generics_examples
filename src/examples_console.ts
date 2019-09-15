import { people, companies, Person, Company } from './data'
import * as filterBy from './filter_by'

export function init() {
  /*
   * Invocation with implicit `any`
   */
  const person = filterBy.withoutGeneric(people, 'firstName', people[0].firstName)

  console.log('Person:', person) // => any[]

  /*
   * Invocation with implicit `any`
   */
  const company = filterBy.withoutGeneric(companies, 'website', companies[1].website)

  console.log('Company:', company) // => any[]

  /*
   * Invocation utilising `Person` type passed as generic
   */
  const personTyped = filterBy.withGeneric<Person>(
    people,
    'firstName', // => `keyof Person`
    people[0].firstName
  )

  console.log('Person:', personTyped) // => Person[]

  /*
   * Invocation utilising `Company` type passed as generic
   */
  const companyTyped = filterBy.withGeneric<Company>(
    companies,
    'website', // => `keyof Company`
    companies[1].website
  )

  console.log('Company:', companyTyped) // => Company[]

  /*
   * Promise call, providing `Person` type for the
   * resolve value generic
   */
  const promise = new Promise<Person[]>(resolve => {
    debugger
    setTimeout(() => resolve(people), 1000)
  })

  console.log('Resolved Person:', promise) // => Person[]

  promise.then((people: Person[]) => people.map((p: Person) => console.log(p.firstName)))
}
