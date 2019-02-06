const getCubeCount = (n) => {
  let values = {};
  let output = [];
  for (let a = 1; a < n; a++) {
    for (let b = 1; b < n; b++) {
      let value = (a ** 3) + (b ** 3);
      if (values[value]) {
        values[value].push([a, b]);
      } else {
        values[value] = [[a, b]];
      }
    }
  }

  for (let c = 1; c < n; c++) {
    for (let d = 1; d < n; d++) {
      let result = (c ** 3) + (d ** 3);
      if(values[result]) {
        values[result].forEach(pair => {
          let temp = pair.slice();
          temp.push(c, d);
          output.push(temp);
        });
      }
    }
  }
  return output;
}

console.log(getCubeCount(10));