//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the first non-repeating       |
//   |   character in a string.                            |
//   |                                                     |
//   | Return type: string/null                            |
//   | - Returns the first non-repeating character if      |
//   |   found, otherwise returns null.                    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to count    |
//   |   the occurrences of each character.                |
//   | - Example with Map:                                 |
//   |   charCounts.set(c, (charCounts.get(c) || 0) + 1);  |
//   | - Example with object:                              |
//   |   charCounts[c] = (charCounts[c] || 0) + 1;         |
//   +=====================================================+
function firstNonRepeatingChar(string) {
    let myMap = new Map();

    for (let char of string) {
        myMap.set(char, (myMap.get(char) || 0) + 1);
    }

    for (let char2 of string) {
        if (myMap.get(char2) === 1) return char2;
    }

    return null;
}




// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcde')));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbccdef')));
console.log("---------------");

// ---------------
// All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('aabbcc')));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('')));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('a')));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar('abcdaef')));
console.log("---------------");


