

export default function statsCalc(intArr: number[]): number[] {
    if(intArr.length === 0) 
        return []
    let minValue = intArr[0];
    let maxValue = intArr[0];
    intArr.forEach((element) => {
        if(minValue > element)
            minValue = element
        else if (maxValue < element)
            maxValue = element
    })
    return [minValue, maxValue, intArr.length, 0]
}