var knapsack = function (weight, items) {
  // loop over array and if we can add it to our list, 
  // loop again to find more values we can add

  // for (let i = 0; i < items.length; i++) {
  //   let max = weigth;
  //   let solution = items[i].v;
  //   for (let j = 0; j < items.length; j++) {
  //     if (j !== i) {
  //     if (max - items[j] > 0) {
  //       solution += items[j].v;
  //     } else {
  //       solutions.push(solution);
  //       break;
  //     }
  //     }
  //   }
  // }

  // the above will not work because it goes in order
  // we need a solution that will work adding every combination


  // check if the previous value for the remaining weight can be added
  // solutions[i][(j+1) - items[i].w].v > solution[ 

  //check if the previous solution for this weight is better
  // solution[i-1][j].v > current one

  //get current value

  let solutions = new Array(items.length).fill([new Array(weight).fill({ w: 0, v: 0 })]);
  for (let i = 0; i < items.length; i++) {
    //need to create a nested value;
    for (let j = 0; j < items.length; j++) {
      // check if value can be added at this weight
      // if yes check if this value is higher than the item
      // else check if there is a value associated with that weight for this item
      // 
      // if (solutions[i-1][j].v > 
      if (items[i].w <= (j + 1) /* max weight */) {
        let leftOverWeight = ((j + 1) - items[i].w);
        if (leftOverWeight > 0) {
          if (solutions[i][leftOverWeight - 1].v + items[i].v > solutions[i - 1][j].v) {
            solutions[i][j].w = solutions[i][leftOverWeight].w + items[i].w;
            solutions[i][j].v = solutions[i][leftOverWeight].v + items[i].v;
          } else {
            solutions[i][j].w = items[i].w;
            solutions[i][j].v = items[i].v;
          }
        } else {
          solutions[i][j].w = items[i].w;
          solutions[i][j].v = items[i].v;
        }
      }
    }
  }
  return solutions;
}





let things = [{ w: 3, v: 10 }, { w: 2, v: 6 }, { w: 4, v: 11 }, { w: 2, v: 4 }, { w: 3, v: 5 }];
console.log(knapsack(7, things)); // 21;
