export default function fizzbuzz(num: number): string {
    if(num % 3 == 0) {
        return "fizz"
    }
    return "" + num;
}