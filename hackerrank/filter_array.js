const filterArray = (criteria, list) => {
  let newList = []
  for (let i = 0; i < list.length; i++) {
    if (i < criteria) {
      newList.push(i)
    }
  }
  return newList
}

console.log(filterArray(4, [1, 2, 5, 63, 4]));