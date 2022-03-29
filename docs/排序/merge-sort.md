---
title: 归并排序/Merge Sort
tags: [排序]
---

## 代码

```javascript

const merge = (left, right) => {
  let result = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);;
}

const mergeSort = (nums) => {

  if (nums.length <= 1) {
    return nums;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const left = nums.slice(0, middleIndex);
  const right = nums.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 7, 32, 6, 21, 10, 11]));

```

## 空间复杂度

O(n)

## 时间复杂度

O(nlogn)

## 是否是稳定排序

是
