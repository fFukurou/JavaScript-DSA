//   +=====================================================+
//   |                 WRITE YOUR CODE HERE                |
//   | Description:                                        |
//   | - This function groups anagrams from an array       |
//   |   of strings.                                       |
//   |                                                     |
//   | Return type: array                                  |
//   | - Returns an array of arrays where each array       |
//   |   contains anagrams.                                |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to manage   |
//   |   the groups of anagrams.                           |
//   | - Example with Map:                                 |
//   |   anagramGroups.set(canonical, group);              |
//   | - Example with object:                              |
//   |   anagramGroups[canonical] = group;                 |
//   +=====================================================+
// Define a function called 'groupAnagrams'.
// It takes an array of strings as its argument.
function groupAnagrams(strings) {
    
    // Create a new Map called 'anagramGroups'.
    // This Map will group anagrams together.
    const anagramGroups = new Map();
    
    // Loop through each string in the array.
    for (const string of strings) {
        
        // Convert the string into an array of
        // individual characters.
        const chars = Array.from(string);
        
        // Sort the characters alphabetically.
        chars.sort();
        
        // Join them back into a single string.
        const canonical = chars.join('');
        
        // Check if this sorted string is already
        // in the 'anagramGroups' Map.
        if (anagramGroups.has(canonical)) {
            
            // If yes, add the original string
            // to that group.
            anagramGroups.get(canonical).push(string);
            
        } else {
            
            // If not, create a new group with
            // this string as its first member.
            const group = [string];
            anagramGroups.set(canonical, group);
        }
    }
    
    // Return the grouped anagrams as an array.
    return Array.from(anagramGroups.values());
} 



// ---------------
// Lowercase Anagrams
// ---------------
console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
console.log("---------------");

// ---------------
// Mixed Case Anagrams
// ---------------
console.log("Mixed Case Anagrams:");
console.log("Input: ['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat']");
console.log("Output: ", JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])));
console.log("---------------");

// ---------------
// No Anagrams
// ---------------
console.log("No Anagrams:");
console.log("Input: ['hello', 'world', 'test']");
console.log("Output: ", JSON.stringify(groupAnagrams(['hello', 'world', 'test'])));
console.log("---------------");

// ---------------
// Empty Strings
// ---------------
console.log("Empty Strings:");
console.log("Input: ['', '', '']");
console.log("Output: ", JSON.stringify(groupAnagrams(['', '', ''])));
console.log("---------------");

// ---------------
// Single Characters
// ---------------
console.log("Single Characters:");
console.log("Input: ['a', 'b', 'a']");
console.log("Output: ", JSON.stringify(groupAnagrams(['a', 'b', 'a'])));
console.log("---------------");



