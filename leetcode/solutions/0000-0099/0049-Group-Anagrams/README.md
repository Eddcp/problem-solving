# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams)

<!-- tags:Array,Hash Table,String,Sorting -->

## Description

<p>Given an array of strings <code>strs</code>, group <strong>the anagrams</strong> together. You can return the answer in <strong>any order</strong>.</p>

<p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> strs = ["eat","tea","tan","ate","nat","bat"]
<strong>Output:</strong> [["bat"],["nat","tan"],["ate","eat","tea"]]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> strs = [""]
<strong>Output:</strong> [[""]]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> strs = ["a"]
<strong>Output:</strong> [["a"]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 100</code></li>
	<li><code>strs[i]</code> consists of lowercase English letters.</li>
</ul>

## Solutions

### Solution 1: Hash Table and Sorting

1. Traverse the string array, sort each string in **character dictionary order** to get a new string.
2. Use the new string as `key` and `[str]` as `value`, and store them in the hash table (`HashMap<String, List<String>>`).
3. When encountering the same `key` during subsequent traversal, add it to the corresponding `value`.

Take `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]` as an example. At the end of the traversal, the state of the hash table is:

| key     | value                   |
| ------- | ----------------------- |
| `"aet"` | `["eat", "tea", "ate"]` |
| `"ant"` | `["tan", "nat"] `       |
| `"abt"` | `["bat"] `              |

Finally, return the `value` list of the hash table.

The time complexity is $O(n\times k\times \log k)$, where $n$ and $k$ are the lengths of the string array and the maximum length of the string, respectively.

Provided by this [repo](https://github.com/doocs/leetcode/tree/main)

<!-- tabs:start -->

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = defaultdict(list)
        for s in strs:
            k = ''.join(sorted(s))
            d[k].append(s)
        return list(d.values())
```

<!-- tabs:end -->

### Solution 2: Counting

We can also change the sorting part in Solution 1 to counting, that is, use the characters in each string $s$ and their occurrence times as `key`, and use the string $s$ as `value` to store in the hash table.

The time complexity is $O(n\times (k + C))$, where $n$ and $k$ are the lengths of the string array and the maximum length of the string, respectively, and $C$ is the size of the character set. In this problem, $C = 26$.

[Neetcode Video](https://www.youtube.com/watch?v=vzdNOK2oB2E&list=PLPe9IkX86X3y5m_MvtNu2ughxsvkqUNKr)

<!-- tabs:start -->

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = defaultdict(list) # mapping charCount to list of anagrams

        for s in strs:
            count = [0] * 26 # a - z

            for c in s:
                count[ord(c) - ord("a")] += 1

            result[tuple(count)].append(s)

        return result.values()
```

<!-- tabs:end -->

<!-- end -->
