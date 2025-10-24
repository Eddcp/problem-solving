/**
 * LeetCode 1: Two Sum
 * https://leetcode.com/problems/two-sum/
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 */

/**
 * Approach 1: Hash Map (One Pass)
 * Time Complexity: O(n) - Single pass through array
 * Space Complexity: O(n) - Hash map storage
 */
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(num, i);
    }
    
    return []; // No solution found
}

/**
 * Approach 2: Brute Force (Two Nested Loops)
 * Time Complexity: O(n^2) - Nested loops
 * Space Complexity: O(1) - Constant space
 */
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
 * Approach 3: Two Pointers (Requires sorted array)
 * Time Complexity: O(n log n) - Sorting + O(n) - Two pointers
 * Space Complexity: O(n) - Store original indices
 */
function twoSumTwoPointers(nums, target) {
    // Create array of [value, originalIndex] pairs
    const indexedNums = nums.map((value, index) => [value, index]);
    
    // Sort by value
    indexedNums.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = indexedNums.length - 1;
    
    while (left < right) {
        const currentSum = indexedNums[left][0] + indexedNums[right][0];
        
        if (currentSum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

/**
 * Approach 4: Using Object as Hash Map
 * Time Complexity: O(n) - Single pass
 * Space Complexity: O(n) - Object storage
 */
function twoSumObject(nums, target) {
    const numObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (complement in numObj) {
            return [numObj[complement], i];
        }
        
        numObj[num] = i;
    }
    
    return [];
}

/**
 * Approach 5: Functional Programming Style
 * Time Complexity: O(n) - Single pass
 * Space Complexity: O(n) - Map storage
 */
const twoSumFunctional = (nums, target) => {
    return nums.reduce((acc, num, index) => {
        if (acc.found) return acc;
        
        const complement = target - num;
        if (acc.map.has(complement)) {
            return {
                found: true,
                result: [acc.map.get(complement), index],
                map: acc.map
            };
        }
        
        acc.map.set(num, index);
        return acc;
    }, { found: false, map: new Map(), result: [] }).result;
};

/**
 * Approach 6: Early Exit Optimization
 * Time Complexity: O(n) - Single pass with early exit
 * Space Complexity: O(n) - Map storage
 */
function twoSumOptimized(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        // Early exit if complement found
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Store current number and its index
        numMap.set(num, i);
    }
    
    return []; // No solution found
}

// Test cases
function testSolution() {
    console.log("🧪 Testing Two Sum Solutions\n");
    
    // Test case 1
    const nums1 = [2, 7, 11, 15];
    const target1 = 9;
    console.log(`Input: nums = [${nums1}], target = ${target1}`);
    console.log(`Hash Map: [${twoSum(nums1, target1)}]`);
    console.log(`Brute Force: [${twoSumBruteForce(nums1, target1)}]`);
    console.log(`Two Pointers: [${twoSumTwoPointers(nums1, target1)}]`);
    console.log(`Object: [${twoSumObject(nums1, target1)}]`);
    console.log(`Functional: [${twoSumFunctional(nums1, target1)}]`);
    console.log(`Optimized: [${twoSumOptimized(nums1, target1)}]`);
    console.log();
    
    // Test case 2
    const nums2 = [3, 2, 4];
    const target2 = 6;
    console.log(`Input: nums = [${nums2}], target = ${target2}`);
    console.log(`Hash Map: [${twoSum(nums2, target2)}]`);
    console.log(`Brute Force: [${twoSumBruteForce(nums2, target2)}]`);
    console.log(`Two Pointers: [${twoSumTwoPointers(nums2, target2)}]`);
    console.log(`Object: [${twoSumObject(nums2, target2)}]`);
    console.log(`Functional: [${twoSumFunctional(nums2, target2)}]`);
    console.log(`Optimized: [${twoSumOptimized(nums2, target2)}]`);
    console.log();
    
    // Test case 3
    const nums3 = [3, 3];
    const target3 = 6;
    console.log(`Input: nums = [${nums3}], target = ${target3}`);
    console.log(`Hash Map: [${twoSum(nums3, target3)}]`);
    console.log(`Brute Force: [${twoSumBruteForce(nums3, target3)}]`);
    console.log(`Two Pointers: [${twoSumTwoPointers(nums3, target3)}]`);
    console.log(`Object: [${twoSumObject(nums3, target3)}]`);
    console.log(`Functional: [${twoSumFunctional(nums3, target3)}]`);
    console.log(`Optimized: [${twoSumOptimized(nums3, target3)}]`);
    console.log();
    
    // Edge cases
    console.log("🔍 Edge Cases:");
    
    // Large numbers
    const nums4 = [1000000000, 2000000000];
    const target4 = 3000000000;
    console.log(`Large numbers: [${twoSum(nums4, target4)}]`);
    
    // Negative numbers
    const nums5 = [-1, -2, -3, -4, -5];
    const target5 = -8;
    console.log(`Negative numbers: [${twoSum(nums5, target5)}]`);
    
    // Zero target
    const nums6 = [1, -1, 2, -2];
    const target6 = 0;
    console.log(`Zero target: [${twoSum(nums6, target6)}]`);
}

// Performance testing
function performanceTest() {
    console.log("\n⚡ Performance Testing:");
    
    // Generate large test case
    const largeNums = Array.from({ length: 10000 }, (_, i) => i);
    const largeTarget = 19999; // Last two elements
    
    console.time("Hash Map (10k elements)");
    twoSum(largeNums, largeTarget);
    console.timeEnd("Hash Map (10k elements)");
    
    console.time("Brute Force (10k elements)");
    twoSumBruteForce(largeNums, largeTarget);
    console.timeEnd("Brute Force (10k elements)");
    
    console.time("Two Pointers (10k elements)");
    twoSumTwoPointers(largeNums, largeTarget);
    console.timeEnd("Two Pointers (10k elements)");
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        twoSum,
        twoSumBruteForce,
        twoSumTwoPointers,
        twoSumObject,
        twoSumFunctional,
        twoSumOptimized,
        testSolution,
        performanceTest
    };
}

// Run tests if this file is executed directly
if (typeof require !== 'undefined' && require.main === module) {
    testSolution();
    performanceTest();
}
