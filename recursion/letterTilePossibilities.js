/*

1079. Letter Tile Possibilities
Medium

332

15

Favorite

Share
You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

 

Example 1:

Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: "AAABBC"
Output: 188
 

Note:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.



                        A2B1
                        /   \
                    A1B1    A2B0
                    /  \       \
                  A0B1  A1B0    A1B0
                  /      \        \
              A0B0      A0B0       A0B0

*/




const numTilePossibilities = tiles => {
  if (!tiles.length) return 0;
  const map = new Map();
  
  for (let i = 0; i < tiles.length; i++) {
    map.set(tiles[i], (map.get(tiles[i]) || 0) + 1);
  }
  
  const findPossibilities = () => {
    let sum = 0;
    for (let [key, value] of map.entries()) {
      if (value === 0) continue;
      sum++;
      map.set(key, map.get(key) - 1);
      sum += findPossibilities(map);
      map.set(key, map.get(key) + 1);
    }
    return sum;
  }

  return findPossibilities();
};
