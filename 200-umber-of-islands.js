/**
 * @param {character[][]} grid
 * @return {number}
 */
 const numIslands = (grid) => {
    let count = 0;
    
    for(let row in grid){
        for(let col in grid[+row]){
            if(grid[+row][+col] === '1'){
                count++
                transform(+row, +col, grid)
            }
        }
    }
    
    return count
};

const transform = (row, col, grid) => {
    if(grid[row] === undefined || grid[row][col] === undefined || grid[row][col] ==='0' ) return;
    
    grid[row][col] = '0'
       
    transform(row + 1, col, grid)    
    transform(row - 1, col, grid)
    transform(row, col + 1, grid)
    transform(row, col - 1, grid)
}
/**
 * TRACE
 * [["1","1","0"],
    ["1","0","0"],
    ["1",,"0","1"]]

    ===
    col: '0'
row: '0'
grid: [['1', '1', '1', '1', '0'], 
       ['1', '1', '0', '1', '0'],
       ['1', '1', '0', '0', '0'],
       ['0', '0', '0', '0', '0']]
count: 0
numIslands: [Function: numIslands]
transform: [Function: transform]
===
transform
row: 0
col: 0
grid: [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
    ]
numIslands: [Function: numIslands]
transform: [Function: transform]

===
transform
row: 1
col: 0
grid: [
    ['0', '1', '1', '1', '0'], 
    ['1', '1', '0', '1', '0'], 
    ['1', '1', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
    ]
numIslands: [Function: numIslands]
transform: [Function: transform]

===
trans
row: 1
col: 0
grid: [
    ['0', '1', '1', '1', '0'], 
    ['0', '1', '0', '1', '0'], 
    ['1', '1', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]

==
row: 2
col: 0
grid: [
    ['0', '1', '1', '1', '0'], 
    ['0', '1', '0', '1', '0'], 
    ['0', '1', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]

==
row: 2
col: 1
grid: [
    ['0', '1', '1', '1', '0'], 
    ['0', '1', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 2
col: 1
grid: [
    ['0', '1', '1', '1', '0'], 
    ['0', '1', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 1
grid: [
    ['0', '1', '1', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 1
grid: [
    ['0', '1', '1', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 1
grid: [
    ['0', '0', '1', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 1
grid: [
    ['0', '0', '1', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 1
grid: [
    ['0', '0', '1', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 2
grid: [
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 2
grid: [
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 2
grid: [
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '1', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 1
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 1
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 1
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 1
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 3
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
==
row: 0
col: 2
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 1
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 1
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 1
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 1
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 2
col: 1
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 2
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 1
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
row: 0
col: 0
grid: [
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0'], 
    ['0', '0', '0', '0', '0']
]
numIslands: [Function: numIslands]
transform: [Function: transform]
==
 */
/**
 * 200. Number of Islands
Medium

18047

411

Add to List

Share
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */