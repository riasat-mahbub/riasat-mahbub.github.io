---
title: "Two Sum - Array Problem"
description: "Finding two numbers in an array that add up to a target sum using hash map approach"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Two Pointers"]
publishDate: 2024-01-15
---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Approach

The brute force approach would be to check every pair, but we can optimize this using a hash map to store previously seen numbers and their indices.

## Solution

```python
def twoSum(nums, target):
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in num_map:
            return [num_map[complement], i]
        
        num_map[num] = i
    
    return []
```

## Explanation

1. **Initialize hash map**: We create an empty dictionary to store numbers and their indices
2. **Iterate through array**: For each number, we calculate what its complement should be
3. **Check if complement exists**: If the complement is already in our hash map, we found our pair
4. **Store current number**: If not found, we store the current number and its index for future lookups

## Time & Space Complexity

- **Time Complexity**: O(n) - We traverse the array once
- **Space Complexity**: O(n) - In worst case, we store all numbers in the hash map

This approach is much more efficient than the brute force O(n²) solution!