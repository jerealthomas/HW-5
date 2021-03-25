/* Instructions:
    Implement the function below to return a function that is a closure.
    The returned closure should be a function that returns a message stating
    the number of times that the closure was called.
    Here is how it will be used:
        const fn = makeFunctionWithMemory()
        console.log(fn())                       // You have called me 1 time.
        console.log(fn())                       // You have called me 2 times.
        console.log(fn())                       // You have called me 3 times.
*/
function makeFunctionWithMemory() {
    // TODO: code your solution here
    describe('makeFunctionWithMemory', () => {
    it('remembers how many times it has been called', () => {
        const fn = makeFunctionWithMemory()
        expect(fn()).toBe('You have called me 1 time.')
        expect(fn()).toBe('You have called me 2 times.')
        expect(fn()).toBe('You have called me 3 times.')
    })
})
}

 const fn = makeFunctionWithMemory()
 console.log(fn())                    // You have called me 1 time.
 console.log(fn())                    // You have called me 2 times.
 console.log(fn())                    // You have called me 3 times.

/* Instructions:
    Implement the function below that takes a `price` (an integer number) and returns a
    Vending Machine object (an object literal). The Vending Machine will remember the
    price for an "orange cola" and remember how much money (in pennies) has been deposited
    into the vending machine. The Vending Machine should have the following methods (which
    are closures as they remember the price and the amount deposited):
      - `nickel` - adds 5 to the total deposited amount and returns the total deposited amount
      - `dime` - adds 10 to the total deposited amount and returns the total deposited amount
      - `quarter` - adds 25 to the total deposited amount and returns the total deposited amount
      - `purchase` - returns one of the following messages:
             if enough money has been deposited:
                `Here is your orange cola and your change of ${ change } cents.`
            otherwise
                `Please insert ${remaining amount needed} cents.`
    Also once a purchase is made, remember to reset the deposited amount back to zero.
    HINT: You can use arrow functions for the methods as there should be no dependence on `this`.
*/
function makeVendingMachine(price) {
    // TODO: code your solution here
    describe('makeVendingMachine', () => {
    it('accepts a nickel', () => {
        const vendingMachine = makeVendingMachine(100)
        expect(vendingMachine.nickel()).toBe(5)
    })
    it('accepts a dime', () => {
        const vendingMachine = makeVendingMachine(100)
        expect(vendingMachine.dime()).toBe(10)
    })
    it('accepts a quarter', () => {
        const vendingMachine = makeVendingMachine(100)
        expect(vendingMachine.quarter()).toBe(25)
    })
    it('does not allow a purchase until the required amount is deposited', () => {
        const vendingMachine = makeVendingMachine(100)
        vendingMachine.nickel()
        expect(vendingMachine.purchase()).toBe('Please insert 95 cents.')
    })
    it('allows a purchase after the required amount is deposited', () => {
        const vendingMachine = makeVendingMachine(35)
        vendingMachine.nickel()
        vendingMachine.dime()
        vendingMachine.quarter()
        expect(vendingMachine.purchase()).toBe('Here is your orange cola and your change of 5 cents.')
    })
    it('resets the deposited amount after a purchase', () => {
        const vendingMachine = makeVendingMachine(15)
        vendingMachine.quarter()
        vendingMachine.purchase()
        expect(vendingMachine.nickel()).toBe(5)
    })
}

 const vendingMachine = makeVendingMachine(100)
 console.log(vendingMachine.purchase())              // Please insert 100 cents.
 console.log(vendingMachine.nickel())                // 5
 console.log(vendingMachine.dime())                  // 15
 console.log(vendingMachine.quarter())               // 40
 console.log(vendingMachine.purchase())              // Please insert 60 cents.
 console.log(vendingMachine.nickel())                // 45
 console.log(vendingMachine.dime())                  // 55
 console.log(vendingMachine.quarter())               // 80
 console.log(vendingMachine.quarter())               // 105
 console.log(vendingMachine.purchase())              // Here is your orange cola and your change of 5 cents.
 console.log(vendingMachine.dime())                  // 10


// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    makeFunctionWithMemory,
    makeVendingMachine
}