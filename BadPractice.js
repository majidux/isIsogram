function isIsogram(str) {
  const k = str.toLowerCase();
  const splitted = k.split('');
  const sorted_arr = splitted.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  if (results.length > 0) {
    return false;
  }
  return true;
}
