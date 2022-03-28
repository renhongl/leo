---
title: 插入排序/Insertion Sort
authors: [pomelo]
tags: [排序]
---

## 代码

```javascript

const insertionSort = (nums) => {

  for (let i = 1, len = nums.length; i < len; i++) {
    let insertIndex = -1;
    let curr = nums[i];
    for (for let j = i - 1; j >= 0; j--) {
      if (curr < nums[j]) {
        nums[j] = curr;
      }
    }
    nums[insertIndex] = 
  }

  return nums;
}

console.log(insertionSort([4, 7, 32, 6, 21, 10, 11]));

```

## 空间复杂度
O(1)

## 时间复杂度
O(n^2)

## 是否是稳定排序
是
