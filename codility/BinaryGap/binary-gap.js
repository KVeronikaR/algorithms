// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  const binArray = Array.from(N.toString(2));
  const indexes = [];
  let gaps = [];

  if (binArray.indexOf('1') === binArray.lastIndexOf('1') || binArray.indexOf('0') === -1) {
    return 0;
  }

  binArray.forEach((element, index) => {
    if (element === '1') {
      indexes.push(index);
    }
  });

  indexes.forEach((element, index) => {
    if (indexes[index + 1]) {
      gaps.push(indexes[index + 1] - indexes[index] - 1);
    }
  });

  return Math.max(...gaps);
}
