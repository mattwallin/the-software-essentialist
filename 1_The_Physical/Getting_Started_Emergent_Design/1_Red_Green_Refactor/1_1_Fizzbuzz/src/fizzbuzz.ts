export default function fizzbuzz(num: number): string {
    if(num % 3 == 0) {
        return "fizz"
    }
    if(num % 5 == 0) {
        return "buzz"
    }
    return "" + num;
}