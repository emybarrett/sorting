function split (wholeArray) {
  const midPoint = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midPoint);
  const secondHalf = wholeArray.slice(midPoint, wholeArray.length);

  return [firstHalf, secondHalf]
}

function merge (firstHalf, secondHalf) {
  let merged = [];
  let fPointer = 0;
  let sPointer = 0;

//while we haven't reached the length of either array
 while (fPointer < firstHalf.length && sPointer < secondHalf.length) {
  if (firstHalf[fPointer] < secondHalf[sPointer]) {
    merged.push(firstHalf[fPointer]);
     fPointer++;
   }

   else {
     merged.push(secondHalf[sPointer]);
     sPointer++
   }
  }
 return merged.concat(firstHalf.slice(fPointer).concat(secondHalf.slice(sPointer)));
}