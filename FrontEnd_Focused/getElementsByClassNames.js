// so we have to create a similar func like getElementsByClassNames - it will do the same thing but we have to return a array of elements

const element = document.getElementById("element");

function getElementByClassNames(element, classname) {
  let results = [];

  if (!element) return results;

  if (element.classList && element.classList.contains(classname)) {
    results.push(element);
  }

  for (let child of element.children) {
    results = results.concat(getElementByClassNames(child, classname));
  }

  return results;
}

console.log(element, "foo bar");

// so I don't understands this properly and the final code is complicated , so let leave it for later this day , I will try to understands it more specifically
