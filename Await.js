const ProductsService = require('../products-service')

/**
 * The ProductsService provides the following methods that return Promises:
 *   - `getDepartments()`      - the promise resolves to an Array of department objects.
 *   - `getDepartmentById(id)` - the promise resolves to a department object
 *                               or rejects if the department is not found.
 */

/**
 * Directions:
  *   Implement the function below to return a Promise that resolves to an array of department names.
 *     - use the `ProductsService.getDepartments()` method to a promise that resolves to
 *       an array of department objects.
 *     - use `await` to wait for the promise to resolve.
 *     - assign the departments to a variable named `departments`.
 *     - convert the array of departments (objects) into an array of department names (strings).
 *     - thus your function should return a promise that resolves to the array of department names.
 */
async function getDepartmentNames() {
    // TODO: code your solution here
    describe('getDepartmentNames', () => {
    it('returns a Promise that resolves to an array of department names', () => {
        expect.assertions(1)
        return getDepartmentNames().then(names => expect(names).toStrictEqual(['Hardware', 'Paint']));
    })
})
}

/**
 * Directions:
 *   Implement the function below to return a Promise that resolves to the department name
 *   from the specified department id.
 *     - use the `ProductsService.getDepartmentById(id)` method to get the department object
 *     - use `await` to wait for the promise to resolve.
 *     - if the promise resolves, return the department's name (a string)
 *     - if the promise rejects, use a `try/catch` block to return a new Error with the
 *       message `Department with id ${id} not found.`
 *
 *   Thus your function should return a promise that either resolves to the department name or
 *   rejects with an Error object with the correct message.
 *
 *   HINT: You don't need to use a Promise constructor in your solution.
 */
async function getDepartmentNameFromId(id) {
    // TODO: code your solution here
    describe('getDepartmentNameFromId', () => {
    it('returns a Promise that when given a correct department id, resolves to the department name', () => {
        expect.assertions(1)
        return getDepartmentNameFromId(2).then(names => expect(names).toBe('Paint'));
    })
    it('returns a Promise that when given an incorrect department id, rejects to an error object', () => {
        expect.assertions(1)
        return expect(getDepartmentNameFromId(3)).rejects.toEqual(
            new Error('Department with id 3 not found.')
        )
    })
})
}

 getDepartmentNames().then(names => { console.log(names) })       // [ 'Hardware', 'Paint' ]
 getDepartmentNameFromId(2).then(name => { console.log(name) })   // 'Paint'
 getDepartmentNameFromId(3)
     .then(name => { console.log(name) })
     .catch(e => console.log(e.message))                          // Department with id 3 not found.


// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    getDepartmentNames,
    getDepartmentNameFromId
}