type wheel = {
  base: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | null,
  spokes: [number, number, number, number, number, number, number, number] | [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]
}

type wheelPuzzle = {
  wheels: [wheel, wheel, wheel, wheel],
  shifts: [number, number, number]
}

const myPuzzle: wheelPuzzle = {
  wheels: [
    {
      base: null,
      spokes: [3, 3, 6, 10, 10, 10, 6, 13],
    },
    {
      base: [1, 6, 10, 6, 10, 2, 6, 10, 4, 1, 5, 5, 4, 8, 6, 3],
      spokes: [10, 2, 22, 2, 17, 15, 14, 5],
    },
    {
      base: [1, 1, 11, 27, 14, 5, 5, 7, 8, 24, 8, 3, 6, 15, 22, 6],
      spokes: [9, 16, 17, 2, 2, 10, 15, 6],
    },
    {
      base: [1, 24, 2, 10, 9, 7, 3, 12, 24, 10, 9, 22, 9, 5, 10, 5],
      spokes: [2, 3, 27, 20, 11, 27, 10, 19, 10, 13, 10, 2, 15, 23, 19, 3],
    },
  ],
  shifts: [0, 0, 0]
}

console.log(myPuzzle)

