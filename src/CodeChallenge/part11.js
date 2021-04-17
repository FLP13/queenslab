/*
I think the complexity of my solution is O(n) which I think is the best complexity a solution for this to have. We need to look at all the characters
to know if they have multiple occurences so I would not change my solution regardless of the size of the input.
*/

const removeFourIdentical = (input) => {

    let inputArray = input.split('');

    let outputArray = [];

    let occurences = 0;

    while (inputArray.length > 0) {
        let currentChar = inputArray.shift();
    
        if (outputArray.length === 0) {
            outputArray.push(currentChar);
            occurences++;
            continue;
        }

        if (currentChar === currentChar.toUpperCase()){
            outputArray.push(currentChar);
            occurences = 1;
            continue;
        }
  
        let lastChar = outputArray[outputArray.length-1];
  
        if (occurences < 3 && currentChar === lastChar) {
            outputArray.push(currentChar);
            occurences++;
            continue;
        }
  
        if (currentChar !== lastChar) {
            outputArray.push(currentChar);
            occurences = 1;
            continue;
        }
    }

    const output = outputArray.join('');

    return output;
};


export default { removeFourIdentical };