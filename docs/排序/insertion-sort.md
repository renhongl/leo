---
title: 插入排序/Insertion Sort
tags: [排序]
---

## 代码

```javascript

const insertionSort = (nums) => {

  for (let i = 1, len = nums.length; i < len; i++) {
    let j = i;
    while(j >= 1 && nums[j] < nums[j - 1]) {
      let temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
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
