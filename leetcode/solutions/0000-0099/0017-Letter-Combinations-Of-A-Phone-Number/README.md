### [17.Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number)

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

Example 1:

```js
Input: digits = "23";
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
```

Example 2:

```js
Input: digits = "";
Output: [];
```

Example 3:

```js
Input: digits = "2";
Output: ["a", "b", "c"];
```

Constraints:

- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

## Solutions

### Solution Using Two Pointers

```python
from typing import List

class Solution:
    def letter_combinations(digits: str) -> List[str]:
        combinations = []
        if not digits:
            return []

        phone_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        def backtrack(index, path):
            if len(path) == len(digits):
                combinations.append(''.join(path))
                return

            for letter in phone_map[digits[index]]:
                path.append(letter)
                backtrack(index + 1, path)
                path.pop()

        backtrack(0, [])
        return combinations
```

```js
const letterCombinations = function (digits) {
  if (!digits) return [];

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(combination, nextDigits) {
    // If no more digits to check, add the combination to the result
    if (nextDigits.length === 0) {
      result.push(combination);
      return;
    }

    // Get the letters that the current digit maps to
    const currentDigit = nextDigits[0];
    const letters = phoneMap[currentDigit];

    // Try each letter
    for (const letter of letters) {
      // Add the current letter and recursively process the remaining digits
      backtrack(combination + letter, nextDigits.slice(1));
    }
  }

  backtrack("", digits);
  return result;
};
```
