"""
LeetCode 1: Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.
"""

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Approach 1: Hash Map (One Pass)
        Time Complexity: O(n) - Single pass through array
        Space Complexity: O(n) - Hash map storage
        """
        num_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        
        return []  # No solution found
    
    def twoSum_brute_force(self, nums: List[int], target: int) -> List[int]:
        """
        Approach 2: Brute Force (Two Nested Loops)
        Time Complexity: O(n^2) - Nested loops
        Space Complexity: O(1) - Constant space
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []
    
    def twoSum_two_pointers(self, nums: List[int], target: int) -> List[int]:
        """
        Approach 3: Two Pointers (Requires sorted array)
        Time Complexity: O(n log n) - Sorting + O(n) - Two pointers
        Space Complexity: O(n) - Store original indices
        """
        # Create list of (value, original_index) pairs
        indexed_nums = [(nums[i], i) for i in range(len(nums))]
        indexed_nums.sort()  # Sort by value
        
        left, right = 0, len(nums) - 1
        
        while left < right:
            current_sum = indexed_nums[left][0] + indexed_nums[right][0]
            if current_sum == target:
                return [indexed_nums[left][1], indexed_nums[right][1]]
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        
        return []

# Test cases
def test_solution():
    sol = Solution()
    
    # Test case 1
    nums1 = [2, 7, 11, 15]
    target1 = 9
    result1 = sol.twoSum(nums1, target1)
    print(f"Input: nums = {nums1}, target = {target1}")
    print(f"Output: {result1}")
    print()
    
    # Test case 2
    nums2 = [3, 2, 4]
    target2 = 6
    result2 = sol.twoSum(nums2, target2)
    print(f"Input: nums = {nums2}, target = {target2}")
    print(f"Output: {result2}")
    print()
    
    # Test case 3
    nums3 = [3, 3]
    target3 = 6
    result3 = sol.twoSum(nums3, target3)
    print(f"Input: nums = {nums3}, target = {target3}")
    print(f"Output: {result3}")
    print()
    
    # Test all approaches
    test_nums = [2, 7, 11, 15]
    test_target = 9
    print("Testing all approaches:")
    print(f"Hash Map: {sol.twoSum(test_nums[:], test_target)}")
    print(f"Brute Force: {sol.twoSum_brute_force(test_nums[:], test_target)}")
    print(f"Two Pointers: {sol.twoSum_two_pointers(test_nums[:], test_target)}")

if __name__ == "__main__":
    test_solution()
