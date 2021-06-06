const sum = require('./App')
// sum()

it("should give some values", () => { })

it("should return sum as 100", () => {
    let result = sum(50, 50);
    expect(result).toBe(100);
})