export default function fizzbuzz(num: number): string {
    if(num < 1 || num > 100) {
        return 'Number can not be higher than 100 or lower than 1'
    }
    else if(num % 5 == 0 && num % 3 == 0) {
        return "fizzbuzz";
    }
    else if(num % 3 == 0) {
        return "fizz"
    }
    else if(num % 5 == 0) {
        return "buzz"
    }
    return "" + num;
}