const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }
  
  function printDepthFirst(start) {
    // your code here
     let current = start;
    let queue = [current];
    let visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
      let node = queue.pop();
      console.log(node);
      for (let item of adjList[node]) {
        if (!visited.has(item)) {
          visited.add(item);
          queue.push(item);
        }
      }
    }
  }
  
  console.log("First Test:")
  printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                      // One possible solution:  3, 4, 6, 5, 1, 2
  console.log("Second Test:")
  printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                      // One possible solution:  6, 4, 5, 2, 1, 3
  console.log("Third Test:")
  printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3