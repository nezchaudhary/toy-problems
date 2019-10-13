// <div class="root">
//   <div class="a">
//     <div class="b">
//       <div class="c">

//       </div>
//     </div>
//   </div>
//   <div class="c">
//   </div>
// </div>
const root = document.body.childNodes[1];

const getElementsByClass = (className) => {
  const result = [];
  const queue = [root];
  
  while(queue.length > 0) {
    const node = queue.shift();
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    if (node.childNodes.length > 0) {
      queue.push(...node.childNodes);
    }
  }
  return result;
}

const getElements = (className) => {
  const classes = className.split('>');
  const index = classes.length - 1;
  const nodes = getElementsByClass(classes[index]);
  if (classes.length === 1) {
    return nodes;
  }
  
  const searchNodes = (i, node) => {
    if (i === -1) {
      return true;
    }
    
    if (node.parentNode && node.parentNode.classList.contains(classes[i])) {
      const exists = searchNodes(i - 1, node.parentNode);
      if (exists) {
        return true;
      }
    }
    return false;
  };
  
  return nodes.filter(node => searchNodes(index - 1, node))
}

console.log(getElementsByClass('c'));
console.log(getElements('a>b>c'));
