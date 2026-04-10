// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 036 Typing Nested Arrays for Game Boards

(() => {
  /*
1. Example of a 3x3 game board:
[
  ["X", "O", "X"], // string[]
  ["O", "X", "O"], // string[]
  ["X", "", "O"], // string[]
]
*/

  // 2. Inferred typing (string[][])
  const gameBoard1 = [
    ["X", "O", "X"], // string[]
    ["O", "X", "O"], // string[]
    ["X", "", "O"], // string[]
  ];

  // 3. Valid assignment with string
  gameBoard1[0][1] = "abc";

  // 4. Invalid assignment with number
  // Error: Type 'number' is not assignable to type 'string'.
  // gameBoard1[1][0] = 123;

  // 5. Explicit typing as string[][]
  const gameBoard2: string[][] = [
    ["X", "O", "X"], // string[]
    ["O", "X", "O"], // string[]
    ["X", "", "O"], // string[]
  ];

  // 6. Valid assignment with string
  gameBoard2[0][1] = "abc";

  // 7. Invalid assignment with number
  // Error: Type 'number' is not assignable to type 'string'.
  // gameBoard2[1][0] = 123;

  // 8. Define union type for cell values
  type CellValue = "X" | "O" | "";

  // 9. Explicit typing with CellValue[][]
  const gameBoard3: CellValue[][] = [
    ["X", "O", "X"], // string[]
    ["O", "X", "O"], // string[]
    ["X", "", "O"], // string[]
  ];

  // 10. Valid assignments with union values
  gameBoard3[0][1] = "X";
  gameBoard3[1][0] = "O";
  gameBoard3[1][1] = "";

  // 11. Invalid assignment with non-union string
  // Error: Type '"abc"' is not assignable to type 'CellValue'.
  // gameBoard3[0][1] = "abc";

  // 12. Invalid assignment with number
  // Error: Type 'number' is not assignable to type 'string'.
  // gameBoard3[1][0] = 123;

  // 13. Define tuple type for fixed 3x3 board
  // type CellValue = "X" | "O" | "";
  type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
  ];

  // 14. Valid assignment with exact 3x3 structure
  const gameBoard4: GameBoard = [
    ["X", "O", "X"], // string[]
    ["O", "X", "O"], // string[]
    ["X", "", "O"], // string[]
  ];

  // 15. Invalid assignment with extra element
  // Error: Type '["X", "O", "X", string]' is not assignable to type '[CellValue2, CellValue2, CellValue2]'.
  //   Source has 4 element(s) but target allows only 3.
  // const gameBoard4: GameBoard = [
  //   ["X", "O", "X", "O"], // string[]
  //   ["O", "X", "O"], // string[]
  //   ["X", "", "O"], // string[]
  // ];
})();
