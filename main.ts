function sortedArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  // can increase indexes from 0 -> length, cuz they are sorted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  // If there are remaining elements in arr1 or arr2, add them to result
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

export function merge(
  array_1: number[],
  array_2: number[],
  array_3: number[]
): number[] {
  // Reverse array_2 (descending)
  const array_reversed_2 = array_2.slice().reverse();

  //Sort array_1 and array_reversed_2
  const merged_array = sortedArrays(array_1, array_reversed_2);

  // Sort merged_array with array_3
  const result = sortedArrays(merged_array, array_3);

  return result;
}

const array_1 = [1, 1, 6]; // ascending
const array_2 = [4, 3, 2]; // descending
const array_3 = [1, 3, 4]; // ascending

const result = merge(array_1, array_2, array_3);
console.log("Merge array:", result);
