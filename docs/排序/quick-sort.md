---
title: 快速排序/Quick Sort
tags: [排序]
---

## 代码

```javascript

const quickSort = (nums) => {

  if (nums.length <= 1) {
    return nums;
  }

  let mid = nums[0];
  let left = [];
  let right = [];

  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] < mid) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat([mid], quickSort(right));
}

console.log(quickSort([4, 7, 32, 6, 21, 10, 11]));

```

## 空间复杂度

O(logn)

## 时间复杂度

O(nlogn)

## 是否是稳定排序

否
