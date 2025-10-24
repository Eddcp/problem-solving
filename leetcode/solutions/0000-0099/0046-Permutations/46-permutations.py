"""
LeetCode 46: Permutations
https://leetcode.com/problems/permutations/

Given an array nums of distinct integers, return all the possible permutations.
You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are unique.
"""

from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        """
        Approach 1: Backtracking with swapping (in-place)
        Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
        Space Complexity: O(n) - recursion depth + result storage
        """
        result = []
        
        def backtrack(start):
            # Base case: if we've placed all elements
            if start == len(nums):
                result.append(nums[:])  # Make a copy
                return
            
            # Try placing each remaining element at position 'start'
            for i in range(start, len(nums)):
                # Swap current element with element at 'start'
                nums[start], nums[i] = nums[i], nums[start]
                # Recurse for next position
                backtrack(start + 1)
                # Backtrack: restore original order
                nums[start], nums[i] = nums[i], nums[start]
        
        backtrack(0)
        return result

    def permute_alternative(self, nums: List[int]) -> List[List[int]]:
        """
        Approach 2: Backtracking with path building
        Time Complexity: O(n! * n)
        Space Complexity: O(n) - recursion depth
        """
        result = []
        
        def backtrack(path, remaining):
            # Base case: no more elements to choose
            if not remaining:
                result.append(path[:])
                return
            
            # Try each remaining element
            for i in range(len(remaining)):
                # Choose
                path.append(remaining[i])
                # Explore
                backtrack(path, remaining[:i] + remaining[i+1:])
                # Unchoose
                path.pop()
        
        backtrack([], nums)
        return result

    def permute_iterative(self, nums: List[int]) -> List[List[int]]:
        """
        Approach 3: Iterative using queue
        Time Complexity: O(n! * n)
        Space Complexity: O(n! * n) - storing all permutations
        """
        if not nums:
            return []
        
        result = [[]]
        
        for num in nums:
            new_result = []
            for perm in result:
                # Insert num at each possible position
                for i in range(len(perm) + 1):
                    new_result.append(perm[:i] + [num] + perm[i:])
            result = new_result
        
        return result

# Test cases
def test_solution():
    sol = Solution()
    
    # Test case 1
    nums1 = [1, 2, 3]
    result1 = sol.permute(nums1)
    print(f"Input: {nums1}")
    print(f"Output: {result1}")
    print(f"Number of permutations: {len(result1)}")
    print()
    
    # Test case 2
    nums2 = [0, 1]
    result2 = sol.permute(nums2)
    print(f"Input: {nums2}")
    print(f"Output: {result2}")
    print()
    
    # Test case 3
    nums3 = [1]
    result3 = sol.permute(nums3)
    print(f"Input: {nums3}")
    print(f"Output: {result3}")
    print()
    
    # Test all approaches
    test_nums = [1, 2, 3]
    print("Testing all approaches:")
    print(f"Backtracking (swap): {sol.permute(test_nums[:])}")
    print(f"Backtracking (path): {sol.permute_alternative(test_nums[:])}")
    print(f"Iterative: {sol.permute_iterative(test_nums[:])}")

if __name__ == "__main__":
    test_solution()
