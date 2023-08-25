import fizzbuzz from "./fizzbuzz";



describe("fizzbuzz", () => {
    it("returns fizz when divisible by 3", () => {
        console.log(fizzbuzz);
        expect(fizzbuzz(3)).toBe("fizz");
    });
});