/*
I had some issues understanding this task.

At first I was thinking the solution was asking for the two numbers which gives the largest odd sum and this is what I based my solution on.
To have an odd sum you have to add an odd number with an even number, so the largest odd number and the largest even number should give the largest odd sum.

I also thought the solution asked for the largest sum of numbers where the digits where odd (52, 5+2 = 7) but this did not work in the first example because only
one of the numbers had an odd sum. Then I thought the sum of all the digits of the numbers should be odd (19+42 = 61, 1+9+4+2) but this doesnt work either.
I hope I made the correct solution anyway!

*/

const largestOddSum = (input) => {

    let sortedNumbers = input.sort(function(a, b){return b-a; });

    let evenNumber = 0;
    let oddNumber = 0;

    for (let i = 0; i < sortedNumbers.length; i++) {
        if (evenNumber > 0 && oddNumber > 0) break;	
        if (sortedNumbers[i] % 2 === 0 && evenNumber === 0) evenNumber = sortedNumbers[i];
        if (sortedNumbers[i] % 2 === 1 && oddNumber === 0) oddNumber = sortedNumbers[i];
    }

    const output = evenNumber + oddNumber;
    return output;
};

export default { largestOddSum };