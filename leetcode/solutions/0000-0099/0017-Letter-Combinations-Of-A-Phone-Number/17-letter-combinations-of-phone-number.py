from typing import List

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

print(letter_combinations("23"))    