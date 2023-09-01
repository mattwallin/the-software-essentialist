export default function palindromeChecker(str: string): boolean {
    const str1 = str.toLocaleLowerCase().split(' ').join(''); //str1 removes spaces and capital letters
    const str2 = str1.split('').reverse().join(''); //str2 reverses str1 for comparison
    if(str1 === str2) {
        return true;
    }
    return false;
}