export default function palindromeChecker(str: string): boolean {
    str = str.toLocaleLowerCase();
    const str2 = str.split('').reverse().join('');
    if(str === str2) {
        return true;
    }
    return false;
}