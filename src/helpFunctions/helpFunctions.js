export function shuffledArr(arr) {
  arr.sort(function(){
    return Math.random() - 0.5;
  });
  return arr;
}