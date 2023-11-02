
//1. Balanced group symbols:
const snail = (array: number[][]): number[] => {
  const result: number[] = [];

  while (array.length > 0) {
    result.push(...array.shift()!);

    for (let i = 0; i < array.length; i++) {
      const rightValue = array[i].pop();
      if (rightValue !== undefined) {
        result.push(rightValue);
      }
    }

    if (array.length > 0) {
      result.push(...array.pop()!.reverse());
    }

    for (let i = array.length - 1; i >= 0; i--) {
      const leftValue = array[i].shift();
      if (leftValue !== undefined) {
        result.push(leftValue);
      }
    }
  }

  return result;
}

const array: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result: number[] = snail(array);
console.log('1. Balanced group symbols:', result);



// 2. Snail rearrangement
const balancedGroupSymbols = (expression: string): boolean => {
  const stack: string[] = [];
  const symbolMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (const char of expression) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const top = stack.pop();
      if (top !== symbolMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const expression1: string = "[()]{}{()}";
const expression2: string = "[(])";

console.log('\n 2. Snail rearrangement');
console.log('expression1: ',balancedGroupSymbols(expression1)); // true
console.log('expression2: ',balancedGroupSymbols(expression2)); // false