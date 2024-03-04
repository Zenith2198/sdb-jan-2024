var series = [0, 1];

while (series.length < 10) {
  series.pop([0]);
  series.pop([1]);
  let sum = series[0] + series[1];
  series.push(sum);
}

console.log(series);