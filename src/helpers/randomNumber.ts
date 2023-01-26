export const randomNumber = (...number: number[]) => {
    if (number.length === 1) {
        return Math.random() * number[0]
    } else {
        const addNumber = number[1] - number[0]
        return number[0] + Math.random() * addNumber
    }
}