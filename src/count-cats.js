export default function countCats(backyard) {
  let countCats = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === '^^') {
        countCats += 1;
      }
    }
  }
  return countCats;
}
