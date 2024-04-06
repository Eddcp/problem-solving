# [202. Happy Number](https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150)

## Description

Write an algorithm to determine if a number `n` is happy.

A <b>happy number</b> is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it <b>loops endlessly</b> in a cycle which does not include 1.
- Those numbers for which this process <b>ends in 1</b> are happy.

Return `true` <i>if`n` is a happy number, and `false` if not.</i>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

## Solutions

#### Python

```python
def numSquareSum(n) -> int:
    squareSum = 0
    while(n):
        squareSum += (n % 10) * (n % 10)
        n = int(n / 10)
    return squareSum

class Solution:
    def isHappy(self, n: int) -> bool:
        numberSet = set()
        while n != 1 and n not in numberSet:
            numberSet.add(n)
            n = numSquareSum(n)
        return n == 1
```
