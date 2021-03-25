const ProductsServiceWithCallbacks = require('../products-service-with-callbacks')

/**
 * ProductsServiceWithCallbacks provides the following methods that each take a callback (`cb`) function:
 *   - `getDepartments(cb)`             - calls the `cb` function with the Array of department objects.
 *   - `getDepartmentById(id, cb, err)` - calls the `cb` function with the department object
 *                                        or calls the `err` function if the department is not found.
 */

/**
 * Directions:
 *   Implement the function below to print the department names.
 *     - use the `ProductsServiceWithCallbacks.getDepartments(cb)` method to get an array of
 *       department objects.
 *     - pass into that method a callback that does the following:
 *         - uses `Array.map` to convert the array of departments (objects) into an array of
 *           department names (strings).
 *         - uses `console.log` to print the array of department names - i.e. `["Hardware", "Paint"]`.
 *           Don't try to loop over the Array of names, just `console.log` the array.
 */
function printAllDepartmentNames() {
    // TODO: code your solution here
    describe('printAllDepartmentNames', () => {
    it('prints an array of department names', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => { })
        printAllDepartmentNames()
        jest.runAllTimers()
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenLastCalledWith(["Hardware", "Paint"])
        spy.mockRestore()
    })
})
}

/**
 * Directions:
 *   Implement the function below to return the department name from the specified department id.
 *     - use the `ProductsServiceWithCallbacks.getDepartmentById(id, cb, err)` method to get the
 *       department object
 *     - pass into that method 2 callbacks, one for success and one for error
 *     - for the success callback pass in a function that uses `console.log` to print the department
 *       name
 *     - for the error callback pass in a function that uses `console.error` to print the following
 *       error message: `Department with id ${id} not found.`
 *   Thus your function should either `console.log` the department name or `console.error` the correct
 *   error message.
*/
function printDepartmentName(id) {
    // TODO: code your solution here
    describe('printDepartmentName', () => {
    it('returns a Promise that when given a correct department id, resolves to the department name', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => { })
        printDepartmentName(2)
        jest.runAllTimers()
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenLastCalledWith('Paint')
        spy.mockRestore()
    })
    it('returns a Promise that when given an incorrect department id, rejects to an error object', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation(() => { })
        printDepartmentName(3)
        jest.runAllTimers()
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenLastCalledWith('Department with id 3 not found.')
        spy.mockRestore()



    })
}

 printAllDepartmentNames()      // [ 'Hardware', 'Paint' ]
 printDepartmentName(2)          // 'Paint'
 printDepartmentName(3)          // Department with id 3 not found.


// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    printAllDepartmentNames,
    printDepartmentName
}