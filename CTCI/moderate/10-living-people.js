/*
Living People: Given a list of people with their birth and death years, implement a method to compute the year with the most number of people alive. You may assume that all the people were born between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should be included in that year's count. For example, Person (birth - 1908, death = 1909) is includded in the counts for both, 1908, 1909.
*/

// // birth year: death year
// [birth years] (sorted)
// [death years] (sorted)
// { year: count }
//   start with birth year

const getSortedYears = (people, field) => {
  const years = [];
  for (let i = 0; i < people.length; i++) {
    years.push(people[i][field]);
  }

  years.sort((a, b) => a - b);
  return years;
};

// O n log n
// sorted is n log n
// then its one iteration
//Fairly Optimal
const maxAliveYear1 = people => {
  const births = getSortedYears(people, 'birth');
  const deaths = getSortedYears(people, 'death');

  console.log('births', births, 'deaths', deaths);

  let birthIndex = 0;
  let deathIndex = 0;
  let currentlyAlive = 0;
  let maxAlive = 0;
  let maxAliveYear = 0;

  while(birthIndex < births.length) {
    if (births[birthIndex] <= deaths[deathIndex]) {
      currentlyAlive++;
      if (currentlyAlive > maxAlive) {
        maxAlive = currentlyAlive;
        maxAliveYear = births[birthIndex];
      }
      birthIndex++;
    } else if (births[birthIndex] > deaths[deathIndex]) {
      currentlyAlive--;
      deathIndex++;
    }
  }
  return maxAliveYear;
}

// build population delta array
const maxAliveYear2 = (people, min, max) => {
  const populationDeltas = getPopulationDeltas(people);
  const maxAliveYear = getMaxAliveYear(populationDeltas);
  return maxAliveYear + min;
}

// Add birth and death years to deltas array
const getPopulationDeltas = (people, min, max) => {
  const populationDeltas = new Array(max - min + 2);
  for (let person of people) {
    const birth = person.birth - min;
    populationDeltas[birth]++;
    const death = person.death - min;
    populationDeltas[death + 1]--;
  }
  return populationDeltas;
}

// Compute running sums and return index with max
const getMaxAliveYear = deltas => {
  let maxAliveYear = 0;
  let maxAlive = 0;
  let currentlyAlive = 0;
  for (let year = 0; year < deltas.length; year++) {
    currentlyAlive += deltas[year];
    if (currentlyAlive > maxAlive) {
      maxAliveYear = year;
      maxAlive = currentlyAlive;    
    }
  }
  return maxAliveYear;
}

console.log(maxAliveYear2([
  { birth: 1912, death: 1915},
  { birth: 1920, death: 1990},
  { birth: 1910, death: 1998},
  { birth: 1901, death: 1972},
  { birth: 1910, death: 1998},
  { birth: 1923, death: 1982},
  { birth: 1913, death: 1998},
  { birth: 1990, death: 1998},
  { birth: 1983, death: 1999},
  { birth: 1975, death: 1994},
]));
