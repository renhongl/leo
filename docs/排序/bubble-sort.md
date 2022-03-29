---
title: 冒泡排序/Bubble Sort
tags: [排序]
---

## 代码

```javascript

const bubbleSort = (nums) => {

  for (let i = 0, len = nums.length; i < len - 1; i++) {
    for (let j = i; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
}

console.log(bubbleSort([4, 7, 32, 6, 21, 10, 11]));

```

## 空间复杂度
O(1)

## 时间复杂度
O(n^2)

## 是否是稳定排序
是
