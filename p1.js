/**
 * Input:
 *  let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
 *
 * Output:
 *  ["3", "4", "10", "23", "42", "63", "ABC", "adidas", "ax", "ba", "mof", ")", "["]
 *
 */

function customSort(arr) {
  //Digit only
  let nums = arr.filter((v) => /^\d+$/.test(v));
  //String of alphabet chars   
  let strs = arr.filter((v) => /^[a-zA-Z]+$/.test(v));
  //remain
  let spes = arr.filter((v) => /[^a-zA-Z0-9]+/.test(v));

  nums = nums.map(v => parseInt(v))
  nums = nums.sort((a, b) => a - b);
  nums = nums.map(v => ""+v)

  strs = strs.sort()

  spes.sort()

  return [...nums, ...strs, ...spes];
}

;
(() => {
    let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];

    const result = customSort(arr)

    console.log(result)
})()
