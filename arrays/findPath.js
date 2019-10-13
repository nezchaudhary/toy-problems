/*
Given a list of scrambled plane tickets, each with a starting city and end city, put together the path of the trip.
Input: [['Atlanta', 'San Francisco'], ['Las Vegas', 'Los Angeles'], ['New York', 'Atlanta'], ['Los Angeles', 'New York'], ['San Francisco', 'Chicago']]
Output: [['Las Vegas', 'Los Angeles'], ['Los Angeles', 'New York'], ['New York', 'Atlanta'], ['Atlanta', 'San Francisco'], ['San Francisco', 'Chicago']]
*/

const inputs = [['Atlanta', 'San Francisco'], ['Las Vegas', 'Los Angeles'], ['New York', 'Atlanta'], ['Los Angeles', 'New York'], ['San Francisco', 'Chicago']]

const output = [['Las Vegas', 'Los Angeles'], ['Los Angeles', 'New York'], ['New York', 'Atlanta'], ['Atlanta', 'San Francisco'], ['San Francisco', 'Chicago']]

function planTrip(tickets) {
  if (tickets.length === 0) return [];
  
  // starts
    // Atlanta
    //Las Vegas: [1, 0]
    //New York
  
  // ends
    //San Francisco
    //Los Angeles
    // 

  // Find unique value in nested array at index 0
  //
  // loop to find
  // Las Vegas now we know!
  // check value at index 1
  // do the same again
  
  // find again
  
  //
  
  const starts = { 'Las Vegas': [1, 0] };
  const ends = {};
  let startCity = '';
  const tripPath = [];
  
  
  // O (n)
  // create a map of start and end cities
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    starts[ticket[0]] = [i, 0];
    ends[ticket[1]] = [i, 1];
  }
  
  // O(n)
  // Find start city
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    const city = ticket[0];
    if (ends[city] === undefined) {
      startCity = city;
      break;
    }
  }
  

  let currentSpot = startCity;
  // find Las Vegas in input (tickets)
  // find end city for Las Vegas --> Los Angeles
  // find Los Angeles in starts again
  while(currentSpot !== undefined) {
    let position = starts[currentSpot];
    let ticket = tickets[position[0]];
    tripPath.push(ticket);
    currentSpot = ticket[1];
    if (!starts[currentSpot]) {
      break;
    }
  }
  
  
  return tripPath;
}

console.log(planTrip(inputs));