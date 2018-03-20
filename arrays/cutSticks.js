
//function get smallest stick if not yet determined.
const getSmallestStick = (lengths) => {
  let result = Number.POSITIVE_INFINITY;
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] < result && lengths[i] > 0) {
      result = lengths[i];
    }
  }
  return result;
}


const cutSticks = (lengths, cutSize, result = []) => {
  if (cutSize === -1) return result;
  if (cutSize === undefined) cutSize = getSmallestStick(lengths);
  let cutCount = 0;
  let newCutSize;
  for (let i = 0; i < lengths.length; i++) {
    if (lengths[i] > 0) {
      lengths[i] -= cutSize;
      lengths[i] = lengths[i] < 0 ? 0 : lengths[i];
      cutCount++;
    }

    if ((lengths[i] < newCutSize || newCutSize === undefined) && lengths[i] > 0) newCutSize = lengths[i];
  }
  result.push(cutCount);
  if (!newCutSize) newCutSize = -1;
  return cutSticks(lengths, newCutSize, result);
}