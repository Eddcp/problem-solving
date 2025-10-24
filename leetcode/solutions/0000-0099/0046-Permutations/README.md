# 0046 - Permutations

## Problem Statement

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

**LeetCode Link:** https://leetcode.com/problems/permutations/

## Examples

### Example 1:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### Example 2:

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

### Example 3:

```
Input: nums = [1]
Output: [[1]]
```

## Constraints

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- All the integers of `nums` are unique.

## Solution Approaches

### 1. Backtracking with Swapping (In-place)

**Time Complexity:** O(n! × n)  
**Space Complexity:** O(n)

This approach uses backtracking with in-place swapping to generate permutations:

- Swap elements to try different arrangements
- Recurse to build the permutation
- Backtrack by swapping back to original positions

**Key Insight:** We can generate permutations by systematically swapping elements and backtracking.

### 2. Backtracking with Path Building

**Time Complexity:** O(n! × n)  
**Space Complexity:** O(n)

This approach builds permutations by choosing elements one by one:

- Maintain a current path and remaining elements
- Choose an element, add to path, recurse
- Backtrack by removing the chosen element

**Key Insight:** Build permutations incrementally by making choices and exploring all possibilities.

### 3. Iterative Approach

**Time Complexity:** O(n! × n)  
**Space Complexity:** O(n! × n)

This approach builds permutations iteratively:

- Start with empty permutation
- For each number, insert it at all possible positions in existing permutations
- Continue until all numbers are processed

**Key Insight:** Build permutations level by level, inserting each new element at all possible positions.

## Algorithm Analysis

### Time Complexity

- **O(n! × n)** where n is the length of the input array
- There are n! permutations to generate
- Each permutation takes O(n) time to construct

### Space Complexity

- **O(n)** for the recursive approaches (recursion stack)
- **O(n! × n)** for the iterative approach (storing all permutations)

## Key Concepts

1. **Backtracking:** A systematic way to explore all possible solutions
2. **Recursion:** Breaking down the problem into smaller subproblems
3. **State Management:** Keeping track of current state and available choices
4. **Pruning:** Avoiding unnecessary exploration of invalid states

## Common Patterns

- **Generate all combinations/permutations:** Use backtracking
- **In-place operations:** Use swapping to save space
- **Path building:** Maintain current state and available choices
- **Iterative construction:** Build solutions level by level

## Related Problems

- [47. Permutations II](https://leetcode.com/problems/permutations-ii/) - Permutations with duplicates
- [31. Next Permutation](https://leetcode.com/problems/next-permutation/) - Generate next permutation
- [60. Permutation Sequence](https://leetcode.com/problems/permutation-sequence/) - Kth permutation
- [77. Combinations](https://leetcode.com/problems/combinations/) - Generate combinations

## Practice Tips

1. **Start with small examples:** Trace through the algorithm with [1,2,3]
2. **Understand the recursion tree:** Visualize how choices are made
3. **Practice backtracking:** This pattern appears in many problems
4. **Consider space vs time trade-offs:** In-place vs path-building approaches

## MCP Integration Ideas

```bash
# Analyze the backtracking approach
mcp explain-code --file 46-permutations.py --focus "backtracking pattern"

# Generate test cases
mcp generate-tests --for "permutations problem" --edge-cases

# Visualize the recursion tree
mcp visualize-tree --file 46-permutations.py --show-recursion

# Compare approaches
mcp compare-algorithms --algos "backtracking, iterative" --focus "space-complexity"
```

## Study Notes

- **Pattern:** Backtracking for generating all combinations/permutations
- **Key Insight:** Use recursion to explore all possible choices
- **Optimization:** In-place swapping reduces space complexity
- **Common Mistake:** Forgetting to backtrack (restore state)
- **Interview Tip:** Explain the recursion tree and time/space complexity clearly
