/*
Dijkstras Shortest Path Algorithm in a graph

*/

const shortestPath = (matrix, root) => {

  const visited = {};
  const distance = new Array(matrix.length).fill(Number.POSITIVE_INFINITY);
  distance[0] = 0;
  let min = Number.POSITIVE_INFINITY;
  let minIndex = -1;

  const dijkstras = (m) => {
    for (let i = 0; i < m.length; i++) {
      let u;
      for (let v = 0; v < distance.length; v++) 
        if (!visited[v] && distance[v] <= min) { 
          min = distance[v]; 
          minIndex = v; 
          u = minIndex;
        }

        visited[u] = true;

        for (let j = 0; j < m[i].length; j++) {
          // v through u is smaller than current value of dist[v] 
          if (!visited[j] && m[u][j] != 0 && distance[u] !== Number.POSITIVE_INFINITY && distance[u] + m[u][j] < distance[j]) 
					distance[j] = distance[u] + graph[u][j]; 
        }
    }
  }

  dijkstras(m, 0);
};

// Dijkstra's single source shortest path algorithm. 
// The program is for adjacency matrix representation of the graph 
// This code is contributed by Aakash Hasija 
const dijkstrasShortestPath = (graph, src) => { 
	// A utility function to find the vertex with minimum distance value, 
	// from the set of vertices not yet included in shortest path tree 
  const V = 9; 
	const minDistance = (distance, sptSet) => {
		// Initialize min value 
    let min = Number.POSITIVE_INFINITY;
    let minI = -1; 

		for (let v = 0; v < V; v++) 
			if (sptSet[v] === false && distance[v] <= min) { 
				min = distance[v]; 
				minI = v; 
			} 

		return minI; 
  };  

	// A utility function to print the constructed distance array 
	const printSolution = distance => { 
		console.log("Vertex Distance from Source"); 
		for (let i = 0; i < V; i++) 
			console.log(`${i}-${distance[i]}`); 
	};

	// Function that implements Dijkstra's single source shortest path 
	// algorithm for a graph represented using adjacency matrix 
	// representation 
	const dijkstra = (graph, src) =>  { 
		const distance = new Array(V); // The output array. dist[i] will hold 
		// the shortest distance from src to i 

		// sptSet[i] will true if vertex i is included in shortest 
		// path tree or shortest distance from src to i is finalized 
		const sptSet = new Array(V).fill(false); 

		// Initialize all distances as INFINITE and stpSet[] as false 
		for (let i = 0; i < V; i++) { 
			distance[i] = Number.POSITIVE_INFINITY; 
			sptSet[i] = false; 
		} 

		// Distance of source vertex from itself is always 0 
		distance[src] = 0; 

		// Find shortest path for all vertices 
		for (let count = 0; count < V - 1; count++) { 
			// Pick the minimum distance vertex from the set of vertices 
			// not yet processed. u is always equal to src in first 
			// iteration. 
			let u = minDistance(distance, sptSet); 

			// Mark the picked vertex as processed 
			sptSet[u] = true; 

			// Update dist value of the adjacent vertices of the 
			// picked vertex. 
			for (let v = 0; v < V; v++) 

				// Update dist[v] only if is not in sptSet, there is an 
				// edge from u to v, and total weight of path from src to 
				// v through u is smaller than current value of dist[v] 
				if (!sptSet[v] && graph[u][v] != 0 && distance[u] != Number.POSITIVE_INFINITY && distance[u] + graph[u][v] < distance[v]) 
        distance[v] = distance[u] + graph[u][v]; 
		} 

		// print the constructed distance array 
		printSolution(distance); 
  }

  dijkstra(graph, src);
}
  
console.log(dijkstrasShortestPath([
  [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ], 
  [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ], 
  [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ], 
  [ 0, 0, 7, 0, 9, 14, 0, 0, 0 ], 
  [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ], 
  [ 0, 0, 4, 14, 10, 0, 2, 0, 0 ], 
  [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ], 
  [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ], 
  [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]
], 0));

