const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  //   // your code here
  //   Create a queue. Create a separate array containing the starting node.
  //Enqueue this array. The enqueued array is the current path.
  // Create a set to store visited nodes
  // While the queue is not empty, repeat steps 4-6
  // Dequeue the first path, and save it in a variable
  // Save the last node in the path in a variable (DO NOT pop it)
  // IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
  // For each unvisited neighbor of the last node:
  // Add it to the visited nodes set
  // Copy the saved path, and add the neighbor to the end. Enqueue this new path
  // If the queue has become empty without finding the thing, then the thing
  // has not been found.
  // Return false, an error, or a message as appropriate for the problem
  //you are solving.
  let queue = [[start]];
  let visited = new Set();
  visited.add(start);
  while (queue.length > 0) {
    let currentPath = queue.shift();
    let lastNode = currentPath[currentPath.length - 1];
    if (lastNode === end) return currentPath;
    for (let neighbor of adjList[lastNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        let newPath = currentPath.slice();
        newPath.push(neighbor);
        queue.push(newPath);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
