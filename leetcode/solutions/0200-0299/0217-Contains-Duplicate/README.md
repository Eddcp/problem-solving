# [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate)

<!-- tags:Array,Hash Table,Sorting -->

## Description

<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> false
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1,3,3,4,3,2,4,2]
<strong>Output:</strong> true
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

## Solutions

### Solution 1: Sorting

First, we sort the array `nums`.

Then, we traverse the array. If there are two adjacent elements that are the same, it means that there are duplicate elements in the array, and we directly return `true`.

Otherwise, when the traversal ends, we return `false`.

The time complexity is $O(n \times \log n)$, where $n$ is the length of the array `nums`.

<!-- tabs:start -->

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return any(a == b for a, b in pairwise(sorted(nums)))
```

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        for (int i = 0; i < nums.length - 1; ++i) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }
        return false;
    }
}
```

<!-- tabs:end -->

### Solution 2: Hash Table

We traverse the array and record the elements that have appeared in the hash table $s$. If an element appears for the second time, it means that there are duplicate elements in the array, and we directly return `true`.

The time complexity is $O(n)$, and the space complexity is $O(n)$, where $n$ is the length of the array `nums`.

<!-- tabs:start -->

#### Using Hash Table by using dict

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        mapDuplicates = {}
        for num in nums:
            count = mapDuplicates.get(num,0) + 1
            if (count >= 2):
                return True
            mapDuplicates[num] = count

        return False
```

#### Using Set and comparing length

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(set(nums)) < len(nums)
```

#### Using Set

```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashSet = set()
        for n in nums:
            if n in hashSet:
                return True
            hashSet.add(n)

        return False
```

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> s = new HashSet<>();
        for (int num : nums) {
            if (!s.add(num)) {
                return true;
            }
        }
        return false;
    }
}
```

```go
func containsDuplicate(nums []int) bool {
	s := map[int]bool{}
	for _, v := range nums {
		if s[v] {
			return true
		}
		s[v] = true
	}
	return false
}
```

<!-- tabs:end -->

<!-- end -->
